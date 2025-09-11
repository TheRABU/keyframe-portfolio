import { IoClose, IoMenu } from "react-icons/io5";
import Logo from "../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-sm border border-gray-100 bg-transparent py-1.5 shadow backdrop-blur-lg md:top-6 rounded-full">
        <div className="px-4">
          <div className="flex items-center space-x-2 justify-between lg:justify-center">
            {/* Logo - Hidden when menu is open on mobile */}
            {!isOpen && (
              <div className="flex shrink-0">
                <a
                  aria-current="page"
                  className="flex items-center"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <img
                    className="h-10 w-auto bg-white rounded-4xl"
                    src={Logo}
                    alt="Website Logo"
                  />
                  <p className="sr-only">keyframe</p>
                </a>
              </div>
            )}

            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:justify-center md:gap-3">
              <button
                onClick={() => scrollToSection("clients")}
                className="px-2 py-1.5 rounded-full border-1 text-neutral-300 hover:bg-neutral-950 hover:text-white"
              >
                Our Clients
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="px-2 py-1.5 rounded-full hover:border-1 text-neutral-300 hover:bg-neutral-800 hover:text-white"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="px-2 py-1.5 rounded-full hover:border-1 text-neutral-300 hover:bg-neutral-800 hover:text-white"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("project-request")}
                className="px-2 py-1.5 rounded-full hover:border-1 text-neutral-300 hover:bg-neutral-800 hover:text-white"
              >
                Project Request
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-2 py-1.5 rounded-full hover:border-1 text-neutral-300 hover:bg-neutral-800 hover:text-white"
              >
                Contact Me
              </button>
            </div>

            {/* Mobile hamburger menu toggle - Hidden when menu is open on mobile */}
            {!isOpen && (
              <div className="md:hidden block">
                <IoMenu
                  className="text-4xl text-white cursor-pointer"
                  onClick={() => setIsOpen(true)}
                />
              </div>
            )}
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="fixed inset-0 top-[70px] z-40 bg-white md:hidden">
            {/* Close button at the top right */}
            <div className="flex justify-end px-4 py-2">
              <IoClose
                className="text-4xl text-white cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>

            {/* Menu items */}
            <div className="px-4 pb-4">
              <div className="flex flex-col gap-2 rounded-xl border bg-white p-4 shadow-lg">
                <button
                  onClick={() => scrollToSection("clients")}
                  className="px-4 py-2 rounded-xl border text-neutral-700 hover:bg-neutral-950 hover:text-white"
                >
                  Our Clients
                </button>
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="px-4 py-2 rounded-xl border text-neutral-700 hover:bg-neutral-950 hover:text-white"
                >
                  Portfolio
                </button>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="px-4 py-2 rounded-xl border text-neutral-700 hover:bg-neutral-950 hover:text-white"
                >
                  Testimonials
                </button>
                <button
                  onClick={() => scrollToSection("project-request")}
                  className="px-4 py-2 rounded-xl border text-neutral-700 hover:bg-neutral-950 hover:text-white"
                >
                  Project Request
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-4 py-2 rounded-xl border text-neutral-700 hover:bg-neutral-950 hover:text-white"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
