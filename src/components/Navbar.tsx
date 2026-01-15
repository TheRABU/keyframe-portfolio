import { IoClose, IoMenu } from "react-icons/io5";
import keyframeLogo from "../assets/keyframe_logo.png";
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
      {/* <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-sm border border-gray-800/50 bg-transparent py-1.5 shadow backdrop-blur-xl md:top-6 rounded-full">
        <div className="px-1">
          <div className="flex items-center space-x-2 justify-between lg:justify-center">
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

            <div className="hidden md:flex md:items-center md:justify-center md:space-x-5">
              <button
                onClick={() => scrollToSection("clients")}
                className="px-2 py-1.5 rounded-full border border-transparent text-neutral-300 hover:border-gray-800/50 hover:bg-neutral-800 hover:text-white whitespace-nowrap"
              >
                Our Clients
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="px-2 py-1.5 rounded-full border border-transparent text-neutral-300 hover:border-gray-800/50 hover:bg-neutral-800 hover:text-white whitespace-nowrap"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="px-2 py-1.5 rounded-full border border-transparent text-neutral-300 hover:border-gray-800/50 hover:bg-neutral-800 hover:text-white whitespace-nowrap"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("project-request")}
                className="px-2 py-1.5 rounded-full border border-transparent text-neutral-300 hover:border-gray-800/50 hover:bg-neutral-800 hover:text-white whitespace-nowrap"
              >
                Project Request
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="px-2 py-1.5 rounded-full border border-transparent text-neutral-300 hover:border-gray-800/50 hover:bg-neutral-800 hover:text-white whitespace-nowrap"
              >
                Thinking big?
              </button>
            </div>

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

        {isOpen && (
          <div className="fixed inset-0 top-[70px] z-40 bg-white md:hidden">
            <div className="flex justify-end px-4 py-2">
              <IoClose
                className="text-4xl text-white cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>

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
                  Thinking big?
                </button>
              </div>
            </div>
          </div>
        )}
      </header> */}
      <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-sm border border-gray-800/50 bg-transparent py-1.5 px-4 shadow backdrop-blur-xl md:top-6 rounded-full">
        <div className="flex items-center justify-between">
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
                  className="h-10 w-auto"
                  src={keyframeLogo}
                  alt="Website Logo"
                />
                <p className="sr-only">keyframe</p>
              </a>
            </div>
          )}

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:justify-center md:space-x-3 flex-1">
            <button
              onClick={() => scrollToSection("clients")}
              className="px-3 py-2 rounded-full border border-transparent text-neutral-300 hover:border-gray-800/50 hover:bg-neutral-800 hover:text-white whitespace-nowrap text-sm"
            >
              Our Clients
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="px-2 py-2 rounded-full border border-transparent text-neutral-300 hover:border-gray-800/50 hover:bg-neutral-800 hover:text-white whitespace-nowrap text-sm"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="px-2 py-2 rounded-full border border-transparent text-neutral-300 hover:border-gray-800/50 hover:bg-neutral-800 hover:text-white whitespace-nowrap text-sm"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("project-request")}
              className="px-4 py-2 rounded-full border border-transparent text-neutral-300 hover:border-gray-800/50 hover:bg-neutral-800 hover:text-white whitespace-nowrap text-sm"
            >
              Project Request
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="group relative px-5 py-2 rounded-full border border-[#5B23FF] text-neutral-300 whitespace-nowrap text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
            >
              <span className="group-hover:hidden">Thinking big?</span>
              <span className="hidden group-hover:inline text-white">
                Let's build it
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-[#5B23FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 rounded-full"></div>
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
                  Thinking big?
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
