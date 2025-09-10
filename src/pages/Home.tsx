import SectionHeader from "@/components/SectionHeader";
import Clients from "@/modules/homepage/Clients";
import Herosection from "@/modules/homepage/Herosection";

const Home = () => {
  return (
    <>
      <div className=" bg-neutral-900">
        {/* <div className="pt-50">
          <h1 className="text-6xl text-white font-semibold text-center">
            HLDJNA
          </h1>
        </div> */}
        <div className="">
          <Herosection />
        </div>
        <div>
          <Clients />
        </div>
      </div>
    </>
  );
};

export default Home;
