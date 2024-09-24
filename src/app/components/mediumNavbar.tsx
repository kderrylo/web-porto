import {Navbar} from "@nextui-org/react";
import {scroller} from "react-scroll";

const handleScroll = (target: string) => {
  scroller.scrollTo(target, {
    duration: 1500,
    delay: 100,
    smooth: "easeInOut",
    offset: -110,
  });
};

const MediumNavbar = () => {
  return (
    <>
      <Navbar
        shouldHideOnScroll
        className="text-light hidden md:flex justify-center bg-transparent md:bg-navbar/80 backdrop-blur-0 md:backdrop-blur-sm border-0 md:border-b md:border-b-light/25"
      >
        <ul className="w-full flex flex-row justify-center items-center py-4 px-78 space-x-24 text-light font-medium">
          <li>
            <button
              onClick={() => handleScroll("hero")}
              className="font-bold hover:text-accent"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("about")}
              className=" font-bold hover:text-accent"
            >
              About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScroll("projects")}
              className=" font-bold hover:text-accent"
            >
              Projects
            </button>
          </li>
          {/* <li>
            <button
              onClick={() => handleScroll("contact-me")}
              className="font-bold hover:text-accent"
            >
              Contact Me
            </button>
          </li> */}
        </ul>
      </Navbar>
    </>
  );
};

export default MediumNavbar;
