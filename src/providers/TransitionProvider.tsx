"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "motion/react";

type TransitionContextType = {
  navigateTo: (href: string) => void;
};

const TransitionContext = createContext<TransitionContextType>({
  navigateTo: () => {},
});

export const usePageTransition = () => useContext(TransitionContext);

const REVEAL_SAFETY_MS = 2500;

export default function TransitionProvider({
  children,
  column = 11,
}: {
  children: ReactNode;
  column?: number;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [phase, setPhase] = useState<"idle" | "covering" | "revealing">("idle");
  const [nextPath, setNextPath] = useState<string | null>(null);
  const [firstLoad, setFirstLoad] = useState(true);

  const getColumnCount = useCallback(
    (width: number) => {
      if (width < 640) return Math.min(4, column);
      if (width < 1024) return Math.min(7, column);
      return column;
    },
    [column],
  );

  const [columns, setColumns] = useState(column);

  useEffect(() => {
    const update = () => setColumns(getColumnCount(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [getColumnCount]);

  // Reveal only after the destination route has actually committed (pathname
  // changed). This is what fixes the "blank page revealed before it loaded" bug
  // — the cover stays up until the new page is really rendered. Deferred to a
  // microtask so we don't call setState synchronously inside the effect body.
  useEffect(() => {
    if (phase === "covering" && nextPath && pathname === nextPath) {
      queueMicrotask(() => setPhase("revealing"));
    }
  }, [pathname, phase, nextPath]);

  // Safety net: if navigation never commits (error / blocked), reveal anyway so
  // the cover never gets stuck.
  const safetyRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (phase !== "covering") return;
    safetyRef.current = setTimeout(() => setPhase("revealing"), REVEAL_SAFETY_MS);
    return () => {
      if (safetyRef.current) clearTimeout(safetyRef.current);
    };
  }, [phase]);

  const navigateTo = useCallback(
    (href: string) => {
      if (firstLoad || phase !== "idle" || pathname === href) return;
      setNextPath(href);
      setPhase("covering");
    },
    [firstLoad, phase, pathname],
  );

  const handleCoverComplete = () => {
    if (nextPath) router.push(nextPath);
  };

  const handleRevealComplete = () => {
    setPhase("idle");
    setNextPath(null);
  };

  const handleFirstLoadComplete = () => {
    setFirstLoad(false);
    setPhase("idle");
    setNextPath(null);
  };

  const show = firstLoad || phase !== "idle";

  return (
    <TransitionContext.Provider value={{ navigateTo }}>
      {children}

      {show && (
        <div className="fixed inset-0 z-9999 flex pointer-events-none">
          {Array.from({ length: columns }).map((_, index) => {
            const state = firstLoad ? "first" : phase;

            let initialY: string;
            let animateY: string;
            let onDone: () => void;
            let delay: number;

            if (state === "first") {
              // Intro: cover is already up, hold briefly, then wipe away.
              initialY = "0%";
              animateY = "100%";
              onDone = handleFirstLoadComplete;
              delay = 0.25 + index * 0.04;
            } else if (state === "covering") {
              initialY = "-100%";
              animateY = "0%";
              onDone = handleCoverComplete;
              delay = index * 0.06;
            } else {
              // revealing
              initialY = "0%";
              animateY = "100%";
              onDone = handleRevealComplete;
              delay = index * 0.06;
            }

            return (
              <motion.div
                key={index}
                className="h-full flex-1 bg-black"
                initial={{ y: initialY }}
                animate={{ y: animateY }}
                transition={{
                  duration: 0.7,
                  delay,
                  ease: [0.76, 0, 0.24, 1],
                }}
                onAnimationComplete={() => {
                  if (index !== columns - 1) return;
                  onDone();
                }}
              />
            );
          })}
        </div>
      )}
    </TransitionContext.Provider>
  );
}
