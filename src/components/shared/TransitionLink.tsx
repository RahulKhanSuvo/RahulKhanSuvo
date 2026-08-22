"use client";

import { ReactNode, MouseEvent } from "react";
import { usePageTransition } from "@/providers/TransitionProvider";

type TransitionLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export default function TransitionLink({
  href,
  children,
  className,
  onClick,
}: TransitionLinkProps) {
  const { navigateTo } = usePageTransition();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(event);

      if (event.defaultPrevented) return;
    }

    event.preventDefault();

    navigateTo(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
