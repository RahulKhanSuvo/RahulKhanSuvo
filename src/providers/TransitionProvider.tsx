"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
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

export default function TransitionProvider({
  children,
  column = 11,
}: {
  children: ReactNode;
  column?: number;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
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

  const navigateTo = useCallback(
    (href: string) => {
      if (isTransitioning || pathname === href) return;

      setNextPath(href);
      setIsTransitioning(true);
      setIsExiting(false);
    },
    [isTransitioning, pathname],
  );

  const handleCoverComplete = () => {
    if (!nextPath) return;

    // Navigate while the screen is completely covered.
    router.push(nextPath);

    // Start the exit animation shortly after navigation.
    setTimeout(() => {
      setIsExiting(true);
    }, 100);
  };

  const handleExitComplete = () => {
    setIsTransitioning(false);
    setIsExiting(false);
    setNextPath(null);
  };

  const handleRevealComplete = () => {
    setIsTransitioning(false);
    setIsExiting(false);
    setNextPath(null);
    setFirstLoad(false);
  };

  return (
    <TransitionContext.Provider value={{ navigateTo }}>
      {children}

      {isTransitioning && (
        <div className="fixed inset-0 z-9999 flex pointer-events-none">
          {Array.from({ length: columns }).map((_, index) => (
            <motion.div
              key={index}
              className="h-full flex-1 bg-black"
              initial={{
                y: firstLoad ? "0%" : "-100%",
              }}
              animate={{
                y: isExiting ? "100%" : firstLoad ? "100%" : "0%",
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.06,
                ease: [0.76, 0, 0.24, 1],
              }}
              onAnimationComplete={() => {
                if (index !== columns - 1) return;
                if (isExiting) {
                  handleExitComplete();
                } else if (firstLoad) {
                  handleRevealComplete();
                } else {
                  handleCoverComplete();
                }
              }}
            />
          ))}
        </div>
      )}
    </TransitionContext.Provider>
  );
}
