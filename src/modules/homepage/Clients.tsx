import ClientCard from "@/components/ClinetCard";
import SectionHeader from "@/components/SectionHeader";

const Clients = () => {
  const clients = [
    {
      image:
        "https://framerusercontent.com/images/C5z57QAFRTpFEQ5yarJrnRF0w.jpg?width=400&height=400",
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
        "https://framerusercontent.com/images/fYRpsfBs5JQmx0HN7TseAzYXiic.jpg?width=160&height=160",
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
      <section className="h-auto min-h-screen w-full py-12 px-4">
        <div className="text-center">
          <SectionHeader props="Our Clients" />
        </div>
        <h2 className="text-5xl font-bold text-center text-gray-400 mb-8">
          Creators <span className="text-white">I've worked with</span>
        </h2>
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
