import TestimonialCard from "@/components/TestimonialCard";
import test1 from "../../assets/sss.png";
import test2 from "../../assets/sss.png";
import test3 from "../../assets/sss.png";
import test4 from "../../assets/sss.png";
import test5 from "../../assets/sss.png";
import test6 from "../../assets/sss.png";
import test7 from "../../assets/sss.png";
import test8 from "../../assets/sss.png";
import test9 from "../../assets/sss.png";
import test10 from "../../assets/sss.png";
import test11 from "../../assets/sss.png";
import test12 from "../../assets/sss.png";
import SectionHeader from "@/components/SectionHeader";

const Testimonials = () => {
  const testimonials = [
    { img_url: test1 },
    { img_url: test2 },
    { img_url: test3 },
    { img_url: test4 },
    { img_url: test5 },
    { img_url: test6 },
    { img_url: test7 },
    { img_url: test8 },
    { img_url: test9 },
    { img_url: test10 },
    { img_url: test11 },
    { img_url: test12 },
  ];

  return (
    <>
      <div className="py-4 lg:py-12 px-4 lg:px-20">
        <div className="text-center pt-5 mb-10">
          <SectionHeader props="Testimonials" />
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {testimonials.map((eachTest, idx) => (
            <TestimonialCard key={idx} img_url={eachTest.img_url} />
          ))}
        </section>
      </div>
    </>
  );
};

export default Testimonials;
