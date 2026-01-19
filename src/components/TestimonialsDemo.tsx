/* eslint-disable @typescript-eslint/no-unused-vars */
interface TestimonialCardProps {
  testimonial: string;
  name: string;
  role: string;
  rating: number;
  image: string;
}
import test1 from "../assets/testimonials/HJ Creatives(Ad Strategist).jpg";
import test2 from "../assets/testimonials/Jaroslav (YouTube Growth Partne).jpg";
import test3 from "../assets/testimonials/Jayton Burnett (Marketing Strategist) .jpg";
import test4 from "../assets/testimonials/Jordan Rafealov (SaaS Growth Partner).jpg";
import test5 from "../assets/testimonials/Samu (YouTube Growth Strategist).jpg";
import test6 from "../assets/testimonials/TechYeti (Software Company) .png";

const TestimonialCard = ({
  testimonial,
  name,
  role,
  image,
}: TestimonialCardProps) => {
  // Generate stars based on rating
  // const renderStars = () => {
  //   return Array.from({ length: 5 }, (_, index) => (
  //     <span key={index}>
  //       {index < rating ? (
  //         <span className="text-yellow-400 text-xl">★</span>
  //       ) : (
  //         <span className="text-gray-600 text-xl">☆</span>
  //       )}
  //     </span>
  //   ));
  // };

  return (
    <div className="bg-gray-100/5 rounded-2xl p-6 py-10 border border-gray-100/10 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-purple-900 flex flex-col text-center h-full drop-shadow-sm drop-shadow-[#5B23FF]">
      <div className="flex-1 mb-6">
        <p className="text-white text-md leading-relaxed">"{testimonial}"</p>
      </div>
      <div className="flex flex-col mx-auto">
        {/* <div className=" mb-6">{renderStars()}</div> */}
        <div className="flex flex-col items-center">
          <img
            src={image}
            alt={name}
            className="w-14 h-14 rounded-full object-cover border-2 border-gray-700"
          />
          <div>
            <h4 className="text-white font-semibold text-base">{name}</h4>
            <p className="text-gray-400 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const TestimonialsDemo = () => {
  const testimonials = [
    {
      id: 2,
      testimonial:
        " I've been working with Sakib & his team now with over 18 months together and they're with a doubt the best editors i've ever worked with. I have never seen such a production speed while still maintaining such high quality, always reliable as well & if any revisions are needed they are always done on time. I really can't find one negative thing that happened in all of the 1-2 years we've now been working together",
      name: "Jaroslav",
      role: "Youtube  Growth Partner",
      rating: 4,
      image: test2,
    },
    {
      id: 1,
      testimonial:
        "I've been working with him for about two years now and he's one of the best editors I've ever worked with. The quality of his work is consistently excellent and he always delivers on time no matter how tight the deadline. He's reliable, skilled, and makes my job easier. I'd recommend him to anyone looking for a top tier editor.",
      name: "HJ Creatives",
      role: "Ad Strategist",
      rating: 5,
      image: test1,
    },

    {
      id: 3,
      testimonial:
        "I've been using this web hosting service for a few months and it's been nothing but problems. My website has gone down multiple times and the customer service has been unresponsive. I would not recommend this company.",
      name: "Jayton Burnett",
      role: "Marketing Strategist",
      rating: 4,
      image: test3,
    },
    {
      id: 4,
      testimonial:
        "Just wanted to say how much we appreciate the work you’ve been doing with us. Your skills are genuinely impressive. The way you visualize ideas and bring them to life through animation is something we really admire. Every project feels thoughtfully crafted and creatively strong.",
      name: "Jordan Refealov",
      role: "SaaS Growth Partner",
      rating: 4,
      image: test4,
    },
    {
      id: 5,
      testimonial:
        "He has been great to work with. He's very reliable and organized. His work is top quality, and he's also good at implementing feedback. If anyone's thinking about working with them, I highly recommend it.",
      name: "Samu",
      role: "Youtube  Growth Strategist",
      rating: 5,
      image: test5,
    },
    {
      id: 6,
      testimonial:
        "He have been the best video editor I have worked with! He has an excellent understanding of styles and trends which allows his edits to always be on point and helps to increase engagement! Highly recommended ",
      name: "TechYeti ",
      role: "Software Company",
      rating: 4,
      image: test6,
    },
  ];

  return (
    <div className="min-h-screen bg-black py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-medium text-white mb-4">
            Testimonials
          </h2>
          <p className="text-gray-400 text-lg">What our clients say about us</p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              testimonial={item.testimonial}
              name={item.name}
              role={item.role}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsDemo;
