import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ReviewCard from "../../components/general/ReviewCard/ReviewCard";
import useAlert from "../../hooks/useAlert";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const RoomDetails = () => {
  const { id } = useParams();
  const [roomDetails, setRoomDetails] = useState([]);
  const [loader, setLoader] = useState(true);
  const axiosSecure = useAxiosSecure();
  // const [date, setDate] = useState("");
  const { user } = useAuth();
  const { successAlert } = useAlert();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [startDate, setStartDate] = useState(new Date());
  const getData = () => {
    setLoader(true);
    axiosSecure(`/room-details/${id}`).then((data) => {
      setRoomDetails(data.data);
      setLoader(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const { room_name, room_description, price_per_night, room_size, availability, room_image, special_offers, reviews } = roomDetails;
  const handleConfirmBooking = (e) => {
    e.preventDefault();
    if (!user) {
      navigate("/login", { state: pathname });
      return;
    }
    // const selectedDate = e.target.date.value;
    // setDate(startDate);
    console.log(startDate);
    document.getElementById("my_modal_1").showModal();
  };

  const handleBooking = () => {
    const order = {
      customerName: user?.displayName,
      email: user?.email,
      date: startDate,
      room_image,
      room_name,
      room_id: id,
      price: price_per_night,
      reviewGiven: false,
    };

    console.log(order);

    axiosSecure.post("/bookings", order).then((data) => {
      console.log(data?.data);
      if (data?.data?.insertedId) {
        axiosSecure.patch(`/rooms/${id}`, { availability: false }).then((data) => {
          console.log(data.data);
          if (data.data.modifiedCount) {
            successAlert("Room Booked Successfully");
            getData();
          }
        });
      }
    });
  };
  return (
    <div className="pb-24">
      <Helmet>
        <title>Room Details | Innova</title>
        <meta name="description" content="Explore detailed information and book your ideal hotel room." />
      </Helmet>
      <div className="text-center pb-14">
        <h1
          className="text-[3rem] sm:text-[3.45rem] lg:text-5xl font-bold mt-4"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          data-aos-once={true}
        >
          Room Details
        </h1>
      </div>
      {loader ? (
        <div className="flex justify-center">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      ) : (
        <div>
          <div className="flex flex-col-reverse lg:flex-row gap-10">
            <div className="flex-1" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200" data-aos-once={true}>
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
                    <span className="font-semibold text-lg">Status:</span>{" "}
                    <span className={`${availability ? "text-black" : "text-red-600"}`}>{availability ? "Available" : "Unavailable"}</span>
                  </li>
                </ul>
              </div>

              <div className="mt-3">
                <h4 className="text-xl underline font-semibold">Special Offers:</h4>
                <p className="font-semibold text-lg">{special_offers ? special_offers : "No offers are available for this room."}</p>
              </div>

              <div className="mt-4 w-fit border border-gray-500 rounded-lg p-4">
                {availability ? (
                  <form onSubmit={handleConfirmBooking} className="flex items-center gap-4">
                    <div>
                      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="input input-bordered w-full" />
                    </div>

                    <button className="btn bg-primary-color text-white hover:bg-black h-auto min-h-0 text-base rounded-md py-2 xl:px-7">Book Now</button>
                  </form>
                ) : (
                  <p className="font-semibold text-lg">This room is booked</p>
                )}
              </div>

              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <div className="card">
                    <figure className="px-3 pt-3">
                      <img src={room_image} alt={room_name} className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                      <h1 className="text-2xl font-semibold">{room_name}</h1>
                      <p>{room_description}</p>
                      <ul className="mt-1">
                        <li>
                          <span className="font-semibold text-lg">Price:</span> ${price_per_night}
                        </li>
                        <li>
                          <span className="font-semibold text-lg">Booked Date:</span> {startDate.toLocaleDateString()}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="modal-action flex justify-evenly mt-0 mx-3 mb-2">
                    <form method="dialog" className="flex-grow">
                      <button className="btn btn-error w-full btn-outline">Cancel</button>
                    </form>
                    <button
                      onClick={handleBooking}
                      className="btn flex-grow bg-primary-color text-white hover:bg-black h-auto min-h-0 text-base rounded-md py-2 xl:px-7"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </dialog>
            </div>
            <div className="w-full lg:w-[52%] xl:flex-1" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200" data-aos-once={true}>
              <img className="rounded size-full object-cover" src={room_image} alt={room_name} />
            </div>
          </div>

          <div className="text-center pt-14 pb-6">
            <h1
              className="text-[3rem] sm:text-[3.45rem] lg:text-5xl font-bold"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="100"
              data-aos-once={true}
            >
              Reviews
            </h1>
          </div>
          <div>
            {reviews?.length ? (
              <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-14">
                {reviews.map((review, idx) => (
                  <ReviewCard key={idx} idx={idx} review={review}></ReviewCard>
                ))}
              </div>
            ) : (
              <h4 className="text-2xl text-center font-semibold">This room has no reviews</h4>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RoomDetails;
