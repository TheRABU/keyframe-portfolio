import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";
import Marquee from "react-fast-marquee";

const Projects = () => {
  const projects = [
    { url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ", title: "Project 1" },
    {
      url: "https://youtu.be/8qX0VIVxivU?si=682P_OyZ7qJtxh91",
      title: "Project 2",
    },
    { url: "https://www.youtube.com/watch?v=jNQXAC9IVRw", title: "Project 3" },
    { url: "https://www.youtube.com/watch?v=ScMzIvxBSi4", title: "Project 4" },
    { url: "https://www.youtube.com/watch?v=oHg5SJYRHA0", title: "Project 5" },
    { url: "https://www.youtube.com/watch?v=aqz-KE-bpKQ", title: "Project 6" },
    {
      url: "https://youtu.be/4RpDAvJXXio?si=ftpjJykBq2A2GtnK",
      title: "Project 7",
    },
    {
      url: "https://youtu.be/cfg_mTm9O-4?si=jvH-Ryv5V5-Yokf1",
      title: "Project 8",
    },
    {
      url: "https://youtu.be/4RpDAvJXXio?si=ftpjJykBq2A2GtnK",
      title: "Project 9",
    },
  ];

  const motionGraphics = [
    {
      url: "https://youtu.be/8qX0VIVxivU?si=682P_OyZ7qJtxh91",
      title: "Project 1",
    },
    {
      url: "https://youtu.be/8qX0VIVxivU?si=682P_OyZ7qJtxh91",
      title: "Project 2",
    },
    {
      url: "https://youtu.be/8qX0VIVxivU?si=682P_OyZ7qJtxh91",
      title: "Project 3",
    },
    {
      url: "https://youtu.be/8qX0VIVxivU?si=682P_OyZ7qJtxh91",
      title: "Project 4",
    },
    {
      url: "https://youtu.be/8qX0VIVxivU?si=682P_OyZ7qJtxh91",
      title: "Project 5",
    },
    {
      url: "https://youtu.be/8qX0VIVxivU?si=682P_OyZ7qJtxh91",
      title: "Project 6",
    },
  ];

  return (
    <>
      <div className="flex flex-col">
        <div className="text-center pt-10">
          <SectionHeader props={"Portfolio"} />
        </div>
        <h2 className="text-5xl font-bold text-center text-gray-400 mb-8">
          My Latest <span className="text-white">Projects</span>
        </h2>
        <div className="flex justify-between items-center px-20">
          <div>
            <h3 className="text-4xl font-semibold text-white">Long Form</h3>
          </div>
          <div>
            <hr className="h-1 w-full px-5 lg:px-50 bg-gray-500" />
          </div>
        </div>
        <section className="py-12 px-4">
          {/* Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 px-4 lg:px-14">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} url={project.url} title={project.title} />
            ))}
          </div>
        </section>
        {/* Motion graphics section */}
        <div className="flex flex-col">
          <div className="flex justify-between items-center px-20">
            <div>
              <h3 className="text-4xl font-semibold text-white">
                Motion Graphics
              </h3>
            </div>
            <div>
              <hr className="h-1 w-full px-5 lg:px-50 bg-gray-500" />
            </div>
          </div>
          <section className="py-12 px-4">
            {/* Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 px-4 lg:px-14">
              {motionGraphics.map((project, idx) => (
                <ProjectCard
                  key={idx}
                  url={project.url}
                  title={project.title}
                />
              ))}
            </div>
          </section>
        </div>

        {/* short form */}
        <div className="flex flex-col">
          <div className="flex justify-between items-center px-20">
            <div>
              <h3 className="text-4xl font-semibold text-white">Short Form</h3>
            </div>
            <div>
              <hr className="h-1 w-full px-5 lg:px-50 bg-gray-500" />
            </div>
          </div>
          <section className="py-12 mx-auto">
            <div className="grid grid-cols-1 px-8 lg:px-14">
              <ProjectCard
                url={"https://youtu.be/VHAK-gU9gi0?si=g1qjWY7Y2xFnbBfK"}
                width="850px"
                height="500px"
              />
            </div>
            <div className="text-center pt-2">
              <a
                href="#_"
                className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group"
              >
                <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
                  Contact Me
                </span>
                <span className="absolute inset-0 border-2 border-white rounded-full"></span>
              </a>
            </div>
          </section>
        </div>

        <div className="relative w-full py-6 overflow-hidden">
          {/* constrain marquee width */}
          <div className="mx-auto max-w-2xl">
            <Marquee
              gradient={true}
              gradientColor={"#1A1A1D"} // #1A1A1D in RGB
              speed={90}
            >
              <div className="mx-8">
                <h2 className="text-4xl text-white">Denim</h2>
              </div>
              <div className="mx-8">
                <h2 className="text-4xl text-white">Nescafe</h2>
              </div>
              <div className="mx-8">
                <h2 className="text-4xl text-white">Nafis Salim</h2>
              </div>
              <div className="mx-8">
                <h2 className="text-4xl text-white">Yahia Amin</h2>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
