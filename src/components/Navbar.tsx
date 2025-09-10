import { IoClose, IoMenu } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import { Link } from "react-router";
import Logo from "../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-transparent py-3 shadow backdrop-blur-lg md:top-6 rounded-full">
        <div className="px-0">
          <div className="flex items-center space-x-2 justify-between lg:justify-center">
            {/* Logo */}
            <div className="flex shrink-0">
              <Link aria-current="page" className="flex items-center" to="/">
                <img
                  className="h-10 w-auto bg-white rounded-4xl"
                  src={Logo}
                  alt="Website Logo"
                />
                <p className="sr-only">Website Title</p>
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex md:items-center md:justify-center md:gap-3">
              <button className="px-3 py-1.5 rounded-full border-2 text-neutral-300 hover:bg-neutral-950 hover:text-white">
                Our Clients
              </button>
              <button className="px-3 py-1.5 rounded-full border-2 text-neutral-300 hover:bg-neutral-950 hover:text-white">
                Portfolio
              </button>
              <button className="px-3 py-1.5 rounded-full border-2 text-neutral-300 hover:bg-neutral-950 hover:text-white">
                Testimonials
              </button>
              <button className="px-3 py-1.5 rounded-full border-2 text-neutral-300 hover:bg-neutral-950 hover:text-white">
                Project Request
              </button>
              <button className="px-3 py-1.5 rounded-full border-2 text-neutral-300 hover:bg-neutral-950 hover:text-white">
                Contact Me
              </button>
            </div>

            {/* Mobile hamburger menu toggle */}
            <div className="md:hidden block">
              {isOpen ? (
                <IoClose
                  className="text-4xl text-white cursor-pointer"
                  onClick={() => setIsOpen(false)}
                />
              ) : (
                <IoMenu
                  className="text-4xl text-white cursor-pointer"
                  onClick={() => setIsOpen(true)}
                />
              )}
            </div>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="md:hidden mt-3 px-4">
            <div className="flex flex-col gap-2 rounded-xl border bg-white p-4 shadow-lg">
              <button className="px-4 py-2 rounded-xl border text-neutral-700 hover:bg-neutral-950 hover:text-white">
                Our Clients
              </button>
              <button className="px-4 py-2 rounded-xl border text-neutral-700 hover:bg-neutral-950 hover:text-white">
                Portfolio
              </button>
              <button className="px-4 py-2 rounded-xl border text-neutral-700 hover:bg-neutral-950 hover:text-white">
                Testimonials
              </button>
              <button className="px-4 py-2 rounded-xl border text-neutral-700 hover:bg-neutral-950 hover:text-white">
                Project Request
              </button>
              <button className="px-4 py-2 rounded-xl border text-neutral-700 hover:bg-neutral-950 hover:text-white">
                Contact Me
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
