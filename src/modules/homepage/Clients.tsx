import ClientCard from "@/components/ClinetCard";
import SectionHeader from "@/components/SectionHeader";

const Clients = () => {
  const clients = [
    {
      image:
        "https://framerusercontent.com/images/DwcT8sXltwRNhKoZtzfkTtClvNs.jpg?width=160&height=160",
      name: "Learn With Shopify",
      stats: "728K subscribers",
      views: "1.2M",
    },
    {
      image:
        "https://framerusercontent.com/images/C5z57QAFRTpFEQ5yarJrnRF0w.jpg?width=400&height=400",
      name: "Daniel Contreras",
      stats: "+400K followers",
      views: "800K",
    },
    {
      image:
        "https://framerusercontent.com/images/fYRpsfBs5JQmx0HN7TseAzYXiic.jpg?width=160&height=160",
      name: "Joseph",
      stats: "100K subscribers",
      views: "300K",
    },
    {
      image:
        "https://framerusercontent.com/images/MAifPhXrzEoKNFLLJzpsLizd0.jpg?width=160&height=160",
      name: "Steven Cravotta",
      stats: "31.5K subscribers",
      views: "120K",
    },
    {
      image:
        "https://framerusercontent.com/images/fED3lIegTVuaSFCdtN3tI0XhsRk.png?width=220&height=202",
      name: "Ruri Ohama",
      stats: "1.5M subscribers",
      views: "2.1M",
    },
  ];

  return (
    <>
      <section className="h-auto w-full py-5 px-4">
        <div className="text-center">
          <SectionHeader props="Our Clients" />
        </div>
        <h2 className="text-5xl font-semibold text-center text-gray-400 mb-8 mt-4">
          Clients <span className="text-white">& Collaborations</span>
        </h2>
        <div className="mx-auto mt-4 mb-14 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-0 max-w-6xl">
          {/* Projects */}
          <div className="flex flex-col items-center text-center flex-1">
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              <span className="text-[#5B23FF]">+</span>450
            </h1>
            <p className="text-gray-300 mt-2">Projects Completed</p>
          </div>

          {/* Divider */}
          <div className="hidden lg:block h-16 w-px bg-white/30"></div>

          {/* Clients */}
          <div className="flex flex-col items-center text-center flex-1">
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              <span className="text-[#5B23FF]">+</span>45
            </h1>
            <p className="text-gray-300 mt-2">Satisfied Clients</p>
          </div>

          {/* Divider */}
          <div className="hidden lg:block h-16 w-px bg-white/30"></div>

          {/* Views */}
          <div className="flex flex-col items-center text-center flex-1">
            <h1 className="text-4xl md:text-5xl font-semibold text-white">
              <span className="text-[#5B23FF]">+</span>13M
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
