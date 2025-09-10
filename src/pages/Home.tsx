import Herosection from "@/modules/homepage/Herosection";

const Home = () => {
  return (
    <>
      <div className="h-screen bg-neutral-900">
        <div className="pt-50">
          <h1 className="text-6xl text-white font-semibold text-center">
            HLDJNA
          </h1>
        </div>
        <div>
          <Herosection />
        </div>
      </div>
    </>
  );
};

export default Home;
