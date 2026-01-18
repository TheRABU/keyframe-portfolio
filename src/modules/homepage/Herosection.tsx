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

          <h1 className="w-full mx-auto mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl tracking-tight leading-tight font-sf-pro font-thin text-white flex flex-wrap items-center justify-center gap-1 sm:gap-2 px-2">
            <span className="inline-block">High-Retention</span>
            <span className="font-apple text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl text-[#6A5FFE] px-2 sm:px-3 md:px-5 inline-block">
              Editing
            </span>
            <span className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
              <span className="inline-block">for</span>
              <motion.span
                style={{
                  filter:
                    "drop-shadow(0 0 80px rgba(147,51,234,0.9)) drop-shadow(0 0 160px rgba(147,51,234,0.6)) drop-shadow(0 0 300px rgba(147,51,234,0.3))",
                }}
                className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-[#6A5FFE] h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 xl:h-24 xl:w-24 rounded-xl sm:rounded-2xl mx-1 sm:mx-2 md:mx-4 shadow-[0_0_50px_rgba(147,51,234,0.8)] hover:scale-105 transition-transform duration-300"
              >
                <img
                  className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-16 xl:h-16 object-contain"
                  src={logoBlack}
                  alt="Keyframe logo"
                />
              </motion.span>
              <span className="inline-block">YouTube & VSLs</span>
            </span>
          </h1>
          {/* <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Here at Keyframe we focus on creative, innovative ideas into reality
            with digital equipment.
          </p> */}
          <div className="flex flex-col mt-0 mb-8 lg:mb-16 lg:mt-10 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a
              href="https://calendly.com/director-keyframe/30min"
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
