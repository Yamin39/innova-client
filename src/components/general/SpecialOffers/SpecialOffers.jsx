import offerImg1 from "../../../assets/images/offer1.jpeg";
import offerImg2 from "../../../assets/images/offer2.png";
import offerImg3 from "../../../assets/images/offer3.jpeg";

const SpecialOffers = () => {
  return (
    <div className="my-12 md:my-24">
      <div className="text-center mb-6">
        <h1 className="text-[3rem] sm:text-[3.45rem] lg:text-5xl font-bold mt-4">Special Offers and Promotions</h1>
        <p className="sm:max-w-[25rem] mx-auto text-gray-500 mt-2">Exclusive Deals for Memorable Stays - Book Now and Save Big!</p>
      </div>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div
          className="rounded-md flex overflow-hidden cursor-pointer flex-col justify-between"
          style={{ boxShadow: "0px 0px 20px 8px rgba(59, 59, 59, 0.123)" }}
        >
          <div className="w-full h-[14rem] sm:h-[18.75rem] md:h-[22vw] lg:h-[11rem] xl:h-[12.5rem] 2xl:h-[18.75rem]">
            <img className="size-full hover:scale-105 duration-300 rounded-md" src={offerImg1} />
          </div>
        </div>
        <div
          className="rounded-md flex overflow-hidden cursor-pointer flex-col justify-between"
          style={{ boxShadow: "0px 0px 20px 8px rgba(59, 59, 59, 0.123)" }}
        >
          <div className="w-full h-[14rem] sm:h-[18.75rem] md:h-[22vw] lg:h-[11rem] xl:h-[12.5rem] 2xl:h-[18.75rem]">
            <img className="size-full hover:scale-105 duration-300 rounded-md" src={offerImg2} />
          </div>
        </div>
        <div
          className="rounded-md flex overflow-hidden cursor-pointer flex-col justify-between"
          style={{ boxShadow: "0px 0px 20px 8px rgba(59, 59, 59, 0.123)" }}
        >
          <div className="w-full h-[14rem] sm:h-[18.75rem] md:h-[22vw] lg:h-[11rem] xl:h-[12.5rem] 2xl:h-[18.75rem]">
            <img className="size-full hover:scale-105 duration-300 rounded-md" src={offerImg3} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
