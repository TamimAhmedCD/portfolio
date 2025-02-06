import { BackgroundBeams } from "../ui/background-beams";
import { Button } from "../ui/button";
import { ModeToggle } from "../ui/MoodToggle/MoodToggle";
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
  return (
    <>
    <div>
        <BackgroundBeams></BackgroundBeams>
    </div>
      <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
        {/* Logo */}
        <div>
          <a href="#home" className="text-2xl font-medium">
            Tamim
          </a>
        </div>
        {/* Nav list */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm  bg-opacity-50 dark:bg-opacity-10 backdrop-blur-xl">
          <li>
            <a href="#home" className="font-Ovo">Home</a>
          </li>
          <li>
            <a href="#about" className="font-Ovo">About me</a>
          </li>
          <li>
            <a href="#services" className="font-Ovo">Services</a>
          </li>
          <li>
            <a href="#work" className="font-Ovo">My Work</a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo">Contact me</a>
          </li>
        </ul>
        <div>
          <div className="hidden lg:flex gap-3 items-center">
            <ModeToggle></ModeToggle>
            <a href="#contact" className="font-Ovo">
              <Button variant="outline">
                Contact <GoArrowUpRight />
              </Button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
