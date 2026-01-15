import Clients from "@/modules/homepage/Clients";
import Herosection from "@/modules/homepage/Herosection";
import ProjectRequest from "@/modules/homepage/ProjectRequest";
import Projects from "@/modules/homepage/Projects";
import QnaSection from "@/modules/homepage/QnaSection";
import Testimonials from "@/modules/homepage/Testimonials";

const Home = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#000000] to-[#181823]">
        <div id="hero">
          <Herosection />
        </div>
        <div id="clients">
          <Clients />
        </div>
        <div id="portfolio">
          <Projects />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="project-request">
          <ProjectRequest />
        </div>
        <div>
          <QnaSection />
        </div>
      </div>
    </>
  );
};

export default Home;
