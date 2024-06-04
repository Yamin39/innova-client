import moment from "moment";
import PropTypes from "prop-types";
import { FaStar } from "react-icons/fa6";

const ReviewCard = ({ review, idx }) => {
  const { ratings, comment, userName, userImg, timestamp } = review;
  return (
    <div
      className="px-6 py-8 shadow-lg rounded-2xl duration-300 flex flex-col justify-between"
      data-aos="fade-up"
      data-aos-duration="600"
      data-aos-delay={`${idx + 2}00`}
      data-aos-once={true}
    >
      <div className="flex justify-end">
        <p className="flex items-center gap-2 bg-yellow-100/60 text-yellow-600 rounded-full px-6 py-2 font-medium">
          <FaStar />
          {ratings}
        </p>
      </div>
      <br />
      <p className="text-gray-500">
        <q>{comment}</q>
      </p>
      <br />
      <div className="flex gap-5 items-center">
        <div className="bg-slate-200 rounded-full">
          <img className="size-8 2xl:size-10 rounded-full object-cover" src={userImg} />
        </div>
        <div>
          <p className="font-semibold text-black text-lg">{userName}</p>
          <ul className="flex flex-wrap gap-2">
            <li title="Review date and time" className="text-gray-500">
              {moment(timestamp).format("DD MMMM YYYY, LT")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.object,
  idx: PropTypes.number,
};

export default ReviewCard;
