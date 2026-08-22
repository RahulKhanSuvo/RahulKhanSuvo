"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
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

  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [nextPath, setNextPath] = useState<string | null>(null);

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

  return (
    <TransitionContext.Provider value={{ navigateTo }}>
      {children}

      {isTransitioning && (
        <div className="fixed inset-0 z-9999 flex pointer-events-none">
          {Array.from({ length: column }).map((_, index) => (
            <motion.div
              key={index}
              className="h-full flex-1 bg-black"
              initial={{
                y: "-100%",
              }}
              animate={{
                y: isExiting ? "100%" : "0%",
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.06,
                ease: [0.76, 0, 0.24, 1],
              }}
              onAnimationComplete={() => {
                if (isExiting) {
                  if (index === column - 1) {
                    handleExitComplete();
                  }
                } else if (index === column - 1) {
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
