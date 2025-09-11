import Accordion from "@/components/Accordion";

const QnaSection = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-start justify-center px-3 lg:px-10 lg:space-x-5 space-y-5 lg:space-y-0 py-10">
        <div className="left-img px-16 lg:px-0">
          <img
            className="h-full w-[500px] rounded-xl"
            src="https://framerusercontent.com/images/C5tEGNA1uWSSAURIZ0Z6rv88r6A.gif?scale-down-to=512&width=800&height=800"
            alt=""
          />
        </div>
        <div className="w-full md:w-5/12">
          <Accordion />
        </div>
      </div>
    </>
  );
};

export default QnaSection;
