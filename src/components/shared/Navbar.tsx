import { Container } from "../common/Container";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full pt-5 z-50">
      <Container className="flex justify-between items-center">
        {/* logo */}
        <a href="#" className="flex flex-col font-bold font-heading text-[3rem] leading-none text-neutral-900">
          <span>RAHUL</span>
          <span className="pl-5">KHAN</span>
        </a>

        {/* nav & resume button */}
        <div className="flex items-center gap-6">
          <div className="hidden sm:flex gap-6 font-medium text-sm tracking-wide items-center text-neutral-800">
            <a href="#" className="hover:opacity-70 transition-opacity">
              Home
            </a>
            <a href="#about" className="hover:opacity-70 transition-opacity">
              About
            </a>
            <a href="#services" className="hover:opacity-70 transition-opacity">
              Services
            </a>
            <a href="#contact" className="hover:opacity-70 transition-opacity">
              Contact
            </a>
          </div>

          {/* Resume Download Pill Button */}
          <a
            href="/resume.pdf"
            download="Rahul_Khan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-neutral-900 bg-neutral-900 text-white text-xs font-mono tracking-wider uppercase transition-all duration-300 hover:bg-white hover:text-neutral-900 shadow-sm group cursor-pointer"
          >
            <span>RESUME</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-y-0.5">
              ↓
            </span>
          </a>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
