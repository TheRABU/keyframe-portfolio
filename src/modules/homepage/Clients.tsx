import ClientCard from "@/components/ClinetCard";
import SectionHeader from "@/components/SectionHeader";
import alexChan from "../../assets/alexchen (145k followers).jpg";
import marshalCrew from "../../assets/Marshall Crews (150k subscribers).jpg";
import michaelMorelli from "../../assets/Michael Morelli (132k subscribers).jpg";
import robtheBank from "../../assets/robthebank (1.2M followers).jpg";
import davidDorn from "../../assets/thedaviddorn (30.7k followers).jpg";
import AnimatedCounter from "@/components/AnimatedCounter";

const Clients = () => {
  const clients = [
    {
      image: alexChan,
      name: "alexchen",
      stats: "145K followers",
      views: "1.2M",
    },
    {
      image: marshalCrew,
      name: "Marshall Crews",
      stats: "150K followers",
      views: "800K",
    },
    {
      image: michaelMorelli,
      name: "Michael Morelli",
      stats: "123K subscribers",
      views: "300K",
    },
    {
      image: robtheBank,
      name: "robthebank",
      stats: "1.2M followers",
      views: "120K",
    },
    {
      image: davidDorn,
      name: "David dorn",
      stats: "30.7k subscribers",
      views: "2.1M",
    },
  ];

  return (
    <>
      <section className="h-auto w-full py-5 px-4 bg-gradient-to-b from-[#000000] to-[#181823]">
        <div className="text-center">
          <SectionHeader props="Our Clients" />
        </div>
        <h2 className="text-5xl font-semibold text-center text-gray-400 mb-8 mt-4">
          Clients <span className="text-white">& Collaborations</span>
        </h2>
        <div className="mx-auto mt-4 mb-14 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-0 max-w-6xl">
          <div className="flex flex-col items-center text-center flex-1">
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              <span className="text-[#5B23FF]">+</span>
              <AnimatedCounter end={450} duration={2500} />
            </h1>
            <p className="text-gray-300 mt-2">Projects Completed</p>
          </div>

          <div className="hidden lg:block h-16 w-px bg-white/30"></div>

          <div className="flex flex-col items-center text-center flex-1">
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              <span className="text-[#5B23FF]">+</span>
              <AnimatedCounter end={45} duration={2000} />
            </h1>
            <p className="text-gray-300 mt-2">Satisfied Clients</p>
          </div>

          <div className="hidden lg:block h-16 w-px bg-white/30"></div>
          <div className="flex flex-col items-center text-center flex-1">
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              <span className="text-[#5B23FF]">+</span>
              <AnimatedCounter end={17} duration={2000} suffix="M" />
            </h1>
            <p className="text-gray-300 mt-2">Views</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {clients.map((client, idx) => (
            <ClientCard key={idx} {...client} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Clients;
