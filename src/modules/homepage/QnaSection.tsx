import Accordion from "@/components/Accordion";
import keyframeAnimation from "../../assets/keyframe logo animation 1_3.mp4";

const QnaSection = () => {
  return (
    <>
      <div className="bg-[#000000] flex flex-col lg:flex-row items-center lg:items-start justify-center px-4 sm:px-6 md:px-8 lg:px-10 gap-5 lg:gap-8 py-10">
        <div className="w-full lg:w-auto flex justify-center">
          <video
            className="w-full max-w-[500px] h-auto rounded-xl object-cover"
            src={keyframeAnimation}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
        <div className="w-full lg:w-5/12">
          <Accordion />
        </div>
      </div>
    </>
  );
};

export default QnaSection;
