import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const RoomDetails = () => {
  const { id } = useParams();
  const [roomDetails, setRoomDetails] = useState([]);
  const [loader, setLoader] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure(`/room-details/${id}`).then((data) => {
      setRoomDetails(data.data);
      setLoader(false);
    });
  }, []);

  const { room_name, room_description, price_per_night, room_size, availability, room_image, special_offers, reviews } = roomDetails;
  return (
    <div className="pb-24">
      <div className="text-center pb-14">
        <h1 className="text-[3rem] sm:text-[3.45rem] lg:text-5xl font-bold mt-4">Room Details</h1>
      </div>
      {loader ? (
        <div className="flex justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div>
          <div className="flex flex-col-reverse lg:flex-row gap-10">
            <div className="flex-1">
              <h2 className="text-3xl font-semibold">{room_name}</h2>
              <p className="text-2xl mt-2 font-medium">
                ${price_per_night}/<span className="text-lg">night</span>
              </p>

              <p className="max-w-[31rem] my-6 text-lg">{room_description}</p>

              <div>
                <ul className="mt-1">
                  <li>
                    <span className="font-semibold text-lg">Room size:</span> {room_size}
                  </li>
                  <li>
                    <span className="font-semibold text-lg">Status:</span> {availability ? "Available" : "Unavailable"}
                  </li>
                </ul>
              </div>

              <div className="mt-3">
                <h4 className="text-xl underline font-semibold">Special Offers:</h4>
                <p className="font-semibold text-lg">{special_offers ? special_offers : "No offers are available for this room."}</p>
              </div>

              <button className="btn bg-primary-color text-white hover:bg-black h-auto min-h-0 text-base rounded-md py-2 xl:px-7 mt-4">Book Now</button>
            </div>
            <div className="w-full lg:w-[52%] xl:flex-1">
              <img className="rounded size-full object-cover" src={room_image} alt={room_name} />
            </div>
          </div>

          <div className="text-center pt-14 pb-6">
            <h1 className="text-[3rem] sm:text-[3.45rem] lg:text-5xl font-bold">Reviews</h1>
          </div>
          <div>{reviews?.length ? <div>review</div> : <h4 className="text-2xl text-center font-semibold">This room has no reviews</h4>}</div>
        </div>
      )}
    </div>
  );
};

export default RoomDetails;
