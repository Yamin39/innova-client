import { useEffect, useState } from "react";
import { GiRoundStar } from "react-icons/gi";
import { MdOutlineEditCalendar } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyBookings = () => {
  const [myBookings, setMyBookings] = useState([]);
  const [loader, setLoader] = useState(true);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  useEffect(() => {
    axiosSecure.get(`/bookings?email=${user.email}`).then((data) => {
      setMyBookings(data?.data);
      setLoader(false);
    });
  }, []);
  return (
    <div className="pb-24">
      <div className="text-center pb-14">
        <h1 className="text-[3rem] sm:text-[3.45rem] lg:text-5xl font-bold mt-4">My Bookings</h1>

        <div>
          <div className="mt-10">
            <div className="overflow-x-auto">
              <table className="table-xs sm:table-md md:table-lg lg:table table-zebra">
                <thead>
                  <tr className="text-left text-xs sm:text-base">
                    <th>Room Name</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Update</th>
                    <th>Review</th>
                    <th>Cancel</th>
                  </tr>
                </thead>

                {loader ? (
                  <tbody>
                    <tr>
                      <td className="skeleton h-4 w-[15%]"></td>
                      <td className="skeleton h-4 w-[15%]"></td>
                      <td className="skeleton h-4 w-[15%]"></td>
                      <td className="skeleton h-4 w-[15%]"></td>
                      <td className="skeleton h-4 w-[15%]"></td>
                      <td className="skeleton h-4 w-[15%]"></td>
                    </tr>
                  </tbody>
                ) : (
                  <tbody>
                    {myBookings.map((myBooking) => (
                      <tr key={myBooking._id} className="text-xs sm:text-base">
                        <td>{myBooking.room_name}</td>
                        <td>${myBooking.price}</td>
                        <td>{myBooking.date}</td>
                        <td>
                          <button
                            className="btn btn-circle min-w-0 w-auto h-auto min-h-0  px-2 md:px-3 py-2 md:py-3 text-xs sm:text-sm font-medium bg-[#4db2ec15] hover:bg-[#4db2ec15] hover:brightness-90 tooltip"
                            data-tip="Update booking date"
                          >
                            <MdOutlineEditCalendar className="text-sm md:text-xl" />
                          </button>
                        </td>
                        <td>
                          <button
                            className="btn btn-circle min-w-0 w-auto h-auto min-h-0  px-2 md:px-3 py-2 md:py-3 text-xs sm:text-sm font-medium bg-[#52ec4d15] hover:bg-[#52ec4d15] hover:brightness-90 tooltip"
                            data-tip="Give a review"
                          >
                            <GiRoundStar className="text-sm md:text-xl" />
                          </button>
                        </td>
                        <td>
                          <button className="btn h-auto min-h-0 btn-error px-2 md:px-5 py-2 md:py-3 rounded text-xs sm:text-sm font-medium text-white">
                            Cancel
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
