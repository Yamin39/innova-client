import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const RoomsCard = ({ room }) => {
  const { _id, room_image, room_name, reviews, price_per_night, availability } = room;
  return (
    <div className="rounded-md flex flex-col justify-between" style={{ boxShadow: "0px 0px 20px 8px rgba(59, 59, 59, 0.123)" }}>
      <div className="w-full h-[14rem] sm:h-[18.75rem] md:h-[22vw] lg:h-[11rem] xl:h-[12.5rem] 2xl:h-[18.75rem] mt-4 px-4">
        <Link to={`/room-details/${_id}`}>
          <img className="size-full hover:brightness-75 duration-300 object-cover rounded-md" src={room_image} />
        </Link>
      </div>

      <h6 className="text-2xl text-primary-color font-semibold mt-4 px-4">
        ${price_per_night}/<span className="text-lg">night</span>
      </h6>

      <h1 className="font-bold text-2xl mt-4 px-4">{room_name}</h1>

      <div className="flex justify-between items-center gap-2 flex-wrap my-4 px-4">
        <h4 className="text-xl font-medium">Reviews: {reviews.length}</h4>
        <div
          title="Availability"
          className={`flex items-center gap-2 border border-black rounded-full px-6 py-2 text-sm ${availability ? "text-black" : "text-red-600"}`}
        >
          {availability ? "Available" : "Unavailable"}
        </div>
      </div>
    </div>
  );
};

RoomsCard.propTypes = {
  room: PropTypes.object,
};

export default RoomsCard;
