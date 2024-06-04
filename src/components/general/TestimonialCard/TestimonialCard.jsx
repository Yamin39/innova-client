import moment from "moment";
import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa6";

const TestimonialCard = ({ review }) => {
  const { userImg, userName, timestamp, comment, ratings, room_name } = review;
  return (
    <div className="card border border-gray-300 p-6">
      <figure className="rounded-full size-40 mx-auto">
        <img src={userImg} className="size-full" />
      </figure>
      <div className="card-body items-center text-center">
        <div>
          <h2 className="text-xl font-semibold">{userName}</h2>
          <p title="Review date and time" className="text-md text-gray-500">
            {moment(timestamp).format("DD MMMM YYYY, LT")}
          </p>
        </div>
        <p className="italic my-4">
          <q>{comment}</q>
        </p>
        <div className="bg-gray-100 text-gray-700 rounded-xl p-6 space-y-3">
          <p className="text-xl">
            <span className="font-bold">Ratings: </span>
            <span className="inline-flex gap-1 items-center">
              {ratings} <FaRegStar />
            </span>
          </p>
          <p title="Room Name" className="bg-white rounded-full px-4 py-1 text-sm">
            {room_name}
          </p>
        </div>
      </div>
    </div>
  );
};

TestimonialCard.propTypes = {
  review: PropTypes.object,
};

export default TestimonialCard;
