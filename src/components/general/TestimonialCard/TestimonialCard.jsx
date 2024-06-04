import moment from "moment";
import { FaRegStar } from "react-icons/fa6";

const TestimonialCard = () => {
  const timestamp = new Date();
  return (
    <div className="card w-96 border border-gray-300 shadow-xl p-6">
      <figure className="rounded-full size-40 mx-auto">
        <img src="https://yamin39.github.io/Wonder-Tour/images/client1.jpg" className="size-full" />
      </figure>
      <div className="card-body items-center text-center">
        <div>
          <h2 className="text-xl font-semibold">James Anderson</h2>
          <p title="Review date and time" className="text-md text-gray-500">
            {moment(timestamp).format("DD MMMM YYYY, LT")}
          </p>
        </div>
        <p className="italic my-4">
          <q>An amazing experience! Wonder Tour made our dream vacation a reality. Unforgettable moments and impeccable service</q>
        </p>
        <p className="bg-cyan-100 text-cyan-700 rounded-full px-6 py-2 text-xl">
          <span className="font-bold">Ratings: </span>
          <span className="inline-flex gap-1 items-center">
            5 <FaRegStar />
          </span>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
