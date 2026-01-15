import { motion, useScroll, useTransform } from "motion/react";
import logo from "../../assets/logo.png";
import { MdArrowOutward } from "react-icons/md";

const Herosection = () => {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);
  // const glowScale = useTransform(scrollY, [0, 1000], [0.8, 1.2]);
  // const glowOpacity = useTransform(scrollY, [0, 1000], [0.3, 0.7]);

  return (
    <>
      <section className="bg-gradient-to-t from-[#000000] to-[#181823] dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:px-12">
          <p className="pt-10 mb-10 font-semibold text-xl text-white mt-3">
            Available for New Projects
          </p>
          <h1 className="w-full lg:w-4/6 mx-auto mb-4 text-4xl font-semibold tracking-tight leading-none text-white md:text-5xl lg:text-6xl ">
            High-Retention Editing <br />
            for{" "}
            <span className="line-block">
              <img
                className="rounded-full w-10 bg-white"
                src={logo}
                alt="logo"
              />
            </span>{" "}
            YouTube & VSLs
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Here at Keyframe we focus on creative, innovative ideas into reality
            with digital equipment.
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="www.youtube.com"
              target="_blank"
              className="group rounded-full border border-white p-3 px-14 text-lg text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 hover:shadow-[0_0_30px_rgba(147,51,234,0.8)] hover:scale-105"
            >
              <div className="flex justify-center items-center gap-x-2">
                <p>Book a Call</p>
                <MdArrowOutward className="text-lg" />
              </div>
            </a>
          </div>

          <div className="flex items-center justify-center py-12">
            {/* Logo Image */}
            <motion.img
              style={{ rotate }}
              className="h-[250px] w-[250px] bg-slate-300 rounded-full relative z-10"
              src={logo}
              alt="Rotating logo"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Herosection;
