import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FeaturedRoomsCard = ({ room, idx }) => {
  const { _id, room_image, room_name, room_description, price_per_night, availability } = room;
  return (
    <div
      className="rounded-md flex flex-col justify-between"
      style={{ boxShadow: "0px 0px 20px 8px rgba(59, 59, 59, 0.123)" }}
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay={`${idx + 2}00`}
      data-aos-once={true}
    >
      <div className="w-full h-[14rem] sm:h-[18.75rem] md:h-[22vw] lg:h-[11rem] xl:h-[12.5rem] 2xl:h-[18.75rem]">
        <img className="size-full object-cover rounded-md" src={room_image} />
      </div>

      <h1 className="font-bold text-2xl mt-4 px-4">{room_name}</h1>

      <div className="flex items-center gap-2 py-1 px-4">
        <p>{room_description}</p>
      </div>

      <div className="flex justify-between items-center gap-2 flex-wrap mt-4 px-4">
        <h6 className="text-2xl text-primary-color font-semibold">
          ${price_per_night}/<span className="text-lg">night</span>
        </h6>

        <div
          title="Availability"
          className={`flex items-center gap-2 border border-black rounded-full px-6 py-2 text-sm ${availability ? "text-black" : "text-red-600"}`}
        >
          {availability ? "Available" : "Unavailable"}
        </div>
      </div>

      <Link
        to={`/room-details/${_id}`}
        className="btn text-base m-4 text-white bg-primary-color hover:bg-primary-color hover:brightness-90 border-none rounded-md"
      >
        Book Now
      </Link>
    </div>
  );
};

FeaturedRoomsCard.propTypes = {
  room: PropTypes.object,
  idx: PropTypes.number,
};

export default FeaturedRoomsCard;
