"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Container } from "../common/Container";
import TransitionLink from "./TransitionLink";
import { usePageTransition } from "@/providers/TransitionProvider";
import { getLenis } from "@/lib/lenis";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.25 },
  },
};

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { navigateTo } = usePageTransition();

  const handleNav = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      const el = document.querySelector(href);
      const lenis = getLenis();
      if (lenis && el) {
        lenis.scrollTo(el as HTMLElement, { offset: -90 });
      } else if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }
    navigateTo(href);
  };

  return (
    <nav className="fixed top-0 left-0 w-full pt-5 z-50">
      <Container className="flex justify-between items-center">
        {/* logo */}
        <TransitionLink
          href="/"
          className={`font-bold font-heading text-[3rem] leading-none ${
            open ? "text-white" : "text-neutral-900"
          }`}
        >
          RK
        </TransitionLink>

        {/* desktop nav & resume button */}
        <div className="hidden sm:flex items-center gap-6">
          <div className="flex gap-6 font-medium text-sm tracking-wide items-center text-neutral-800">
            <TransitionLink
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNav("/");
              }}
              className="hover:opacity-70 transition-opacity"
            >
              Home
            </TransitionLink>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#about");
              }}
              className="hover:opacity-70 transition-opacity"
            >
              About
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#services");
              }}
              className="hover:opacity-70 transition-opacity"
            >
              Services
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#contact");
              }}
              className="hover:opacity-70 transition-opacity"
            >
              Contact
            </a>
          </div>

          {/* Resume Download Pill Button */}
          <a
            href="/resume.pdf"
            download="Rahul_Khan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded border border-neutral-900 bg-neutral-900 text-white text-xs font-mono tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-neutral-900 shadow-sm group cursor-pointer"
          >
            <span>RESUME</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-y-0.5">
              ↓
            </span>
          </a>
        </div>

        {/* mobile hamburger */}
        {!open && (
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="sm:hidden flex flex-col gap-1.5 p-2"
          >
            <span className="block h-0.5 w-7 bg-neutral-900" />
            <span className="block h-0.5 w-7 bg-neutral-900" />
          </button>
        )}
      </Container>

      {/* mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-neutral-900 text-white sm:hidden flex flex-col"
            initial={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)", opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* close button */}
            <Container className="flex justify-end pt-7">
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="relative flex flex-col gap-0 p-2"
              >
                <motion.span
                  initial={{ rotate: 0, y: 0 }}
                  animate={{ rotate: 45, y: 5 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="block h-0.5 w-7 bg-white"
                />
                <motion.span
                  initial={{ rotate: 0, y: 0 }}
                  animate={{ rotate: -45, y: -5 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="block h-0.5 w-7 bg-white"
                />
              </button>
            </Container>

            <Container className="flex-1 flex flex-col justify-center">
              <motion.ul
                variants={listVariants}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-3"
              >
                {links.map((link, i) => (
                  <motion.li key={link.href} variants={itemVariants}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNav(link.href);
                      }}
                      className="group flex items-baseline gap-4 font-heading text-5xl font-bold uppercase text-white"
                    >
                      <span className="text-sm font-mono text-neutral-500">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="transition-transform duration-300 group-hover:translate-x-2">
                        {link.label}
                      </span>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.a
                variants={itemVariants}
                href="/resume.pdf"
                download="Rahul_Khan_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-12 inline-flex w-fit items-center gap-2 px-5 py-2 rounded border border-white text-white text-xs font-mono tracking-wider uppercase hover:bg-white hover:text-neutral-900 transition-colors duration-300"
              >
                <span>RESUME</span>
                <span>↓</span>
              </motion.a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
