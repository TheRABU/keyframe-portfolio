import { motion, useScroll, useTransform } from "motion/react";
import keyframeLogo from "../../assets/keyframe_logo.png";

import logoBlack from "../../assets/logo_black.png";
import { MdArrowOutward } from "react-icons/md";

const Herosection = () => {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1000], [0, 90]);
  // const glowScale = useTransform(scrollY, [0, 1000], [0.8, 1.2]);
  // const glowOpacity = useTransform(scrollY, [0, 1000], [0.3, 0.7]);

  return (
    <>
      <section className="">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:px-12">
          <div className="flex justify-center items-center pt-10 space-x-1.5">
            <div className="h-2.5 w-2.5 bg-[#6A5FFE] rounded-full"></div>
            <p className="mb-8 font-semibold text-xl text-white mt-8">
              Available for New Projects
            </p>
          </div>

          <h1 className="w-full mx-auto mb-4 text-4xl tracking-tight leading-none font-sf-pro font-thin text-white md:text-5xl lg:text-8xl flex flex-wrap items-center justify-center gap-0.5">
            High-Retention
            <span className="font-apple text-[#6A5FFE] px-5">Editing</span>
            <span className="flex items-center justify-start gap-1">
              <span>for</span>
              <motion.span className="inline-flex items-center justify-center bg-gradient-to-b from-purple-500 to-purple-600 h-16 w-16 md:h-20 md:w-20 lg:h-18 lg:w-18 rounded-2xl mx-8">
                <span className="text-3xl md:text-4xl lg:text-5xl">
                  <img
                    className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-16 object-contain"
                    src={logoBlack}
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
              className="group rounded-full border border-[#5B23FF] p-3 px-14 text-lg text-white font-semibold bg-gradient-to-r from-purple-500 to-[#6A5FFE] transition-all duration-300 hover:shadow-[0_0_50px_rgba(147,51,234,0.8)] hover:scale-105"
            >
              <div className="flex justify-center items-center gap-x-2">
                <p>Book a Call</p>
                <MdArrowOutward className="text-lg" />
              </div>
            </a>
          </div>

          <div className="flex items-center justify-center py-12">
            <motion.img
              style={{
                rotate,
                filter:
                  "drop-shadow(0 0 80px rgba(147,51,234,0.9)) drop-shadow(0 0 160px rgba(147,51,234,0.6)) drop-shadow(0 0 300px rgba(147,51,234,0.3))",
              }}
              src={keyframeLogo}
              alt="Rotating logo"
              className="h-[250px] w-[250px] object-contain"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Herosection;
