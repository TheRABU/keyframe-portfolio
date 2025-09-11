interface TestimonialProps {
  img_url: string | undefined;
}

const TestimonialCard = ({ img_url }: TestimonialProps) => {
  return (
    <>
      <div className="w-full relative h-24 flex items-center justify-center p-2">
        <div className="transform h-64 transition duration-100 hover:scale-115 flex justify-center items-center">
          <img src={img_url} alt="" />
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
