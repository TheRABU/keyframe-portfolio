import { motion, useScroll, useTransform } from "motion/react";
import logo from "../../assets/logo.png";
import { MdArrowOutward } from "react-icons/md";

const Herosection = () => {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1000], [0, 90]);
  // const glowScale = useTransform(scrollY, [0, 1000], [0.8, 1.2]);
  // const glowOpacity = useTransform(scrollY, [0, 1000], [0.3, 0.7]);

  return (
    <>
      <section className="bg-gradient-to-t from-[#000000] to-[#181823] dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:px-12">
          <p className="pt-10 mb-8 font-semibold text-xl text-white mt-8">
            Available for New Projects
          </p>
          <h1 className="w-full lg:w-4/6 mx-auto mb-4 text-4xl font-semibold tracking-tight leading-none text-white md:text-5xl lg:text-6xl flex flex-wrap items-center justify-center gap-4">
            <span>High-Retention Editing</span>
            <span className="flex items-center gap-4">
              <span>for</span>
              <motion.span className="inline-flex items-center justify-center h-16 w-16 md:h-20 md:w-20 lg:h-24 lg:w-24 bg-gradient-to-br from-purple-400 to-[#5B23FF] rounded-2xl">
                <span className="text-3xl md:text-4xl lg:text-5xl">
                  <img
                    className="w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 object-contain"
                    src={logo}
                    alt=""
                  />
                </span>
              </motion.span>
              <span>YouTube & VSLs</span>
            </span>
          </h1>
          {/* <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Here at Keyframe we focus on creative, innovative ideas into reality
            with digital equipment.
          </p> */}
          <div className="flex flex-col mt-0 mb-8 lg:mb-16 lg:mt-10 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="www.youtube.com"
              target="_blank"
              className="group rounded-full border border-[#5B23FF] p-3 px-14 text-lg text-white font-semibold bg-gradient-to-r from-purple-400 to-[#5B23FF] transition-all duration-300 hover:shadow-[0_0_50px_rgba(147,51,234,0.8)] hover:scale-105"
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
              className="h-[250px] w-[250px] bg-slate-300 rounded-full relative z-10 shadow-[0_0_250px_rgba(147,51,234,0.9)]"
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
