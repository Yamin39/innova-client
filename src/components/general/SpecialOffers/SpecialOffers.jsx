import offerImg1 from "../../../assets/images/offer1.jpeg";
import offerImg2 from "../../../assets/images/offer2.png";
import offerImg3 from "../../../assets/images/offer3.jpeg";

const SpecialOffers = () => {
  const offers = [
    {
      id: 1,
      img: offerImg1,
    },
    {
      id: 2,
      img: offerImg2,
    },
    {
      id: 3,
      img: offerImg3,
    },
  ];
  return (
    <div className="my-12 md:my-24">
      <div className="text-center mb-6" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" data-aos-once={true}>
        <h1 className="text-[3rem] sm:text-[3.45rem] lg:text-5xl font-bold mt-4">Special Offers and Promotions</h1>
        <p className="sm:max-w-[25rem] mx-auto text-gray-500 mt-2">Exclusive Deals for Memorable Stays - Book Now and Save Big!</p>
      </div>
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {offers?.map((offer, idx) => (
          <div
            key={offer.id}
            className="rounded-md flex overflow-hidden cursor-pointer flex-col justify-between"
            style={{ boxShadow: "0px 0px 20px 8px rgba(59, 59, 59, 0.123)" }}
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay={`${idx + 2}00`}
            data-aos-once={true}
          >
            <div className="w-full h-[14.5rem] sm:h-[20.75rem] md:h-[22vw] lg:h-[13rem] xl:h-[18.75rem]">
              <img className="size-full hover:scale-105 duration-300 rounded-md" src={offer.img} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialOffers;
