import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import BookingsTableRow from "../../components/general/BookingsTableRow/BookingsTableRow";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const MyBookings = () => {
  const [myBookings, setMyBookings] = useState([]);
  const [loader, setLoader] = useState(true);
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const getData = () => {
    setLoader(true);
    axiosSecure.get(`/bookings?email=${user.email}`).then((data) => {
      setMyBookings(data?.data);
      setLoader(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="min-h-[70vh]">
      <Helmet>
        <title>My Bookings | Innova</title>
        <meta name="description" content="View and manage your hotel reservations effortlessly on our My Bookings page" />
      </Helmet>
      <div className="text-center pb-14">
        <h1
          className="text-[3rem] sm:text-[3.45rem] lg:text-5xl font-bold mt-4"
          data-aos="fade-up"
          data-aos-duration="600"
          data-aos-delay="100"
          data-aos-once={true}
        >
          My Bookings
        </h1>

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
                    {myBookings?.map((myBooking) => (
                      <BookingsTableRow key={myBooking._id} myBooking={myBooking} getData={getData}></BookingsTableRow>
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
