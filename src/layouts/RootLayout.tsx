import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <div className="bg-[#1A1A1D]">
        <Navbar />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default RootLayout;
