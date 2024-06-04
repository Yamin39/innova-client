import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Testimonials = () => {
  return (
    <div className="my-12 md:my-24">
      <div className="text-center mb-6">
        <h1 className="text-[3rem] sm:text-[3.45rem] lg:text-5xl font-bold mt-4">Testimonials</h1>
        <p className="sm:max-w-[25rem] mx-auto text-gray-500 mt-2">See What Others Say About Their Stays</p>
      </div>

      <div>
        <TestimonialCard></TestimonialCard>
      </div>
    </div>
  );
};

export default Testimonials;
