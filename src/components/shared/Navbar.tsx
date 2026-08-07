import { Container } from "../common/Container";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full pt-5 z-50">
      <Container className="flex justify-between items-center">
        {/*logo*/}
        <div className="flex flex-col font-bold font-heading text-[3rem] leading-none">
          <span>RAHUL</span>
          <span className="pl-5">KHAN</span>
        </div>
        {/*nav*/}
        <div className="flex gap-4 ">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
      </Container>
    </nav>
  );
};
export default Navbar;
