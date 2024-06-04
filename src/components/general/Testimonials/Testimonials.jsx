import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import TestimonialCard from "../TestimonialCard/TestimonialCard";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  const [loader, setLoader] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/review").then((data) => {
      setReviews(data?.data);
      setLoader(false);
    });
  }, []);
  return (
    <div className="my-12 md:my-24">
      <div className="text-center mb-10" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" data-aos-once={true}>
        <h1 className="text-[3rem] sm:text-[3.45rem] lg:text-5xl font-bold mt-4">Testimonials</h1>
        <p className="sm:max-w-[25rem] mx-auto text-gray-500 mt-2">See What Others Say About Their Stays</p>
      </div>

      <div>
        {loader ? (
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <Swiper
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            grabCursor={true}
            modules={[Pagination, EffectCoverflow]}
            className=""
          >
            {reviews.map((review) => (
              <SwiperSlide key={review._id} className="max-w-96">
                <TestimonialCard review={review}></TestimonialCard>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
