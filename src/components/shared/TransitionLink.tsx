"use client";

import { ReactNode, MouseEvent } from "react";
import { usePageTransition } from "@/providers/TransitionProvider";

type TransitionLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function TransitionLink({
  href,
  children,
  className,
}: TransitionLinkProps) {
  const { navigateTo } = usePageTransition();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    navigateTo(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
