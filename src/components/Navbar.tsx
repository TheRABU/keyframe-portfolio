import { IoMenu } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-transparent py-3 shadow backdrop-blur-lg md:top-6 rounded-3xl lg:max-w-screen-sm">
        <div className="px-4">
          <div className="flex items-center justify-between lg:justify-center">
            <div className="flex shrink-0">
              <Link aria-current="page" className="flex items-center" to="/">
                <img
                  className="h-7 w-auto"
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt=""
                />
                <p className="sr-only">Website Title</p>
              </Link>
            </div>
            <div className="md:hidden block">
              <IoMenu className="text-4xl" />
            </div>
            <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
              <a
                aria-current="page"
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#"
              >
                How it works
              </a>
              <button className="px-8 py-2 rounded-3xl border-2 text-neutral-300 hover:bg-neutral-950 hover:text-white">
                Works
              </button>
              <a
                className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                href="#"
              >
                Pricing
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
