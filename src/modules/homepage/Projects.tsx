import ProjectCard from "@/components/ProjectCard";
import SectionHeader from "@/components/SectionHeader";

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
          </section>
        </div>
      </div>
    </>
  );
};

export default Projects;
