"use client";

import { motion } from "motion/react";
import { Container } from "../common/Container";

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-[#0a0a0a] text-white pt-20 pb-8 sm:pt-28 sm:pb-12 lg:pt-36 lg:pb-14 overflow-hidden"
    >
      <Container className="flex flex-col justify-between min-h-[75vh]">
        {/* Top Header Section */}
        <div>
          {/* Subheading note */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs sm:text-sm font-mono text-neutral-400 tracking-wider uppercase max-w-2xl leading-relaxed mb-8 sm:mb-12"
          >
            FOR ENQUIRIES, COLLABORATION REQUESTS OR JOB OPPORTUNITIES,
            DON&apos;T HESITATE TO REACH OUT!
          </motion.p>

          {/* Main Giant Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="text-7xl sm:text-9xl md:text-[11rem] lg:text-[15rem] xl:text-[18rem] font-bold font-heading  uppercase text-white select-none">
              GET IN TOUCH
            </h2>
          </motion.div>
        </div>

        {/* Middle Divider & Contact Info */}
        <div className="mt-12 sm:mt-20">
          <div className="w-full border-t border-neutral-800/80 mb-8 sm:mb-12" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          >
            {/* Email link */}
            <a
              href="mailto:rahulkhansuvo@gmail.com"
              className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-neutral-200 hover:text-white transition-colors duration-300 group flex items-center gap-2"
            >
              <span>rahul.khan.suvo@gmail.com</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>

            {/* Phone link */}
            <a
              href="tel:+8801700000000"
              className="text-xl sm:text-3xl lg:text-4xl font-light tracking-tight text-neutral-400 hover:text-white transition-colors duration-300"
            >
              +880 1609553810
            </a>
          </motion.div>
        </div>

        {/* Bottom Bar / Copyright */}
        <div className="mt-20 sm:mt-28 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-6 text-[0.7rem] sm:text-xs font-mono text-neutral-500 uppercase tracking-widest">
          {/* Copyright */}
          <div>©{new Date().getFullYear()} RAHUL KHAN</div>

          {/* Social Links */}
          <div className="flex items-center gap-6 sm:gap-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              GITHUB
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              LINKEDIN
            </a>
            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors duration-200"
            >
              WHATSAPP
            </a>
          </div>

          {/* Design Credit */}
          <div>DEVELOPED BY RAHUL</div>
        </div>
      </Container>
    </footer>
  );
};
