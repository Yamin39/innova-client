import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from "../../../assets/images/slide1.jpg";
import slide2 from "../../../assets/images/slide2.jpg";
import slide3 from "../../../assets/images/slide3.jpg";
import slide4 from "../../../assets/images/slide4.jpg";

const Banner = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 justify-evenly items-center bg-[#4db2ec15] rounded-xl px-[3.2rem] sm:px-[4.875rem] lg:px-[4.2rem] xl:px-[4.875rem] py-[4rem] sm:py-[5.6rem] sm:mt-4">
      <div className="text-center lg:text-left w-full lg:w-auto">
        <h1 className="text-[3rem] sm:text-[3.45rem] lg:text-[3.4rem] xl:text-[3.65rem] leading-[3.7rem] sm:leading-[4.5rem] font-bold mt-4">
          Start Booking <br />
          with <span className="text-primary-color">Innova</span>
        </h1>
        <p className="max-w-[18.125rem] mx-auto lg:mx-0 text-lg leading-8 mt-2">Find and book the best hotel in every place this world.</p>
        <Link to="/rooms" className="btn bg-primary-color text-white hover:bg-black h-auto min-h-0 text-base rounded-md py-2 xl:px-7 mt-4">
          Explore
        </Link>
      </div>
      <div>
        <Swiper
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          grabCursor={true}
          modules={[Autoplay, Pagination]}
          className="w-[17rem] sm:w-[27.5rem] lg:w-[25rem] xl:w-[27.5rem] 2xl:w-[32.5rem] h-[20rem] rounded-[1.125rem]"
        >
          <SwiperSlide className="size-full">
            <img className="size-full object-cover" src={slide1} />
          </SwiperSlide>
          <SwiperSlide className="size-full">
            <img className="size-full object-cover" src={slide2} />
          </SwiperSlide>
          <SwiperSlide className="size-full">
            <img className="size-full object-cover" src={slide3} />
          </SwiperSlide>
          <SwiperSlide className="size-full">
            <img className="size-full object-cover" src={slide4} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
