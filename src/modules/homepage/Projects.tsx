import NewProjectCard from "@/components/NewProjectCard";
import SectionHeader from "@/components/SectionHeader";
import Marquee from "react-fast-marquee";
import company1 from "../../assets/companies/1.png";
import company2 from "../../assets/companies/2_00000.png";
import company3 from "../../assets/companies/3_00000.png";
import company4 from "../../assets/companies/4_00000.png";
import company5 from "../../assets/companies/5_00000.png";
import company6 from "../../assets/companies/6_00000.png";
import company7 from "../../assets/companies/7_00000.png";
import company8 from "../../assets/companies/8_00000.png";
import company9 from "../../assets/companies/9_00000.png";
import company10 from "../../assets/companies/10.png";

// thumbnails
import thumb1 from "../../assets/thumbnails/maxresdefault.jpg";
import thumb2 from "../../assets/thumbnails/maxresdefault (1).jpg";
import thumb3 from "../../assets/thumbnails/maxresdefault (2).jpg";
import thumb4 from "../../assets/thumbnails/maxresdefault (3).jpg";
import thumb5 from "../../assets/thumbnails/hook 2_00000.jpg";
import thumb6 from "../../assets/thumbnails/x.jpg";

//documentary thumbnails
import docum1 from "../../assets/thumbnails/docum1.jpg";
import docum2 from "../../assets/thumbnails/docum2.jpg";
import docum3 from "../../assets/thumbnails/docum3.jpg";

const Projects = () => {
  const projects = [
    { url: "https://www.youtube.com/watch?v=ytMXoy6raoI", img: thumb1 },
    {
      url: "https://www.youtube.com/watch?v=zOm_YxsnyMY&t",
      img: thumb2,
    },
    {
      url: "https://www.youtube.com/watch?v=aq8QnltLW_w&t=3s",
      img: thumb3,
    },
    {
      url: "https://www.youtube.com/watch?v=zKYsdDgRqtA&t=99s",
      img: thumb4,
    },
    { url: "https://youtu.be/v0F_kgOGQds", img: thumb5 },
    { url: "https://youtu.be/bJEYBf0EEv4", img: thumb6 },
  ];

  const documentaries = [
    {
      url: "https://www.youtube.com/watch?v=ZfSJbyif2xw&t=1s",
      img: docum1,
    },
    {
      url: "https://www.youtube.com/watch?v=ZOHJ8pnIIZM",
      img: docum2,
    },
    {
      url: "https://www.youtube.com/watch?v=tWrDeHl2nXU",
      img: docum3,
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="text-center pt-12 mt-8">
        <SectionHeader props={"Portfolio"} />
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center text-gray-400 mt-6 mb-12 px-4">
        Featured <span className="text-white">Projects</span>
      </h2>

      <div className="relative w-full py-6 overflow-hidden">
        <div className="mx-auto max-w-6xl">
          <Marquee gradient={true} gradientColor={"#000000"} speed={100}>
            {[
              company1,
              company2,
              company3,
              company4,
              company5,
              company6,
              company7,
              company8,
              company9,
              company10,
            ].map((company, idx) => (
              <div key={idx} className="mx-8 flex items-center">
                <img
                  className="object-contain h-12 md:h-16 w-40 grayscale hover:grayscale-0 transition-all duration-300"
                  src={company}
                  alt={`Company ${idx + 1}`}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      <div className="px-4 lg:px-20 mb-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white lg:px-28">
            Youtube & VSL's
          </h3>
          <div className="hidden lg:block flex-1 mx-28">
            <hr className="h-max left-2 bg-[#6A5FFE]" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:px-28">
          {projects.map((project, idx) => (
            <NewProjectCard key={idx} link={project.url} img={project.img} />
          ))}
        </div>
      </div>

      <div className="px-4 lg:px-20 mb-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white lg:px-28">
            Documentaries
          </h3>
          <div className="hidden lg:block flex-1 mx-28">
            <hr className="h-max bg-[#5B23FF]" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:px-28">
          {documentaries.map((project, idx) => (
            <NewProjectCard key={idx} link={project.url} img={project.img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
