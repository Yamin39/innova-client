import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import FeaturedRoomsCard from "../FeaturedRoomsCard/FeaturedRoomsCard";

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loader, setLoader] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/rooms").then((data) => {
      setRooms(data?.data);
      setLoader(false);
    });
  }, []);
  return (
    <div className="my-12 md:my-24">
      <div className="text-center mb-6" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" data-aos-once={true}>
        <h1 className="text-[3rem] sm:text-[3.45rem] lg:text-5xl font-bold mt-4">Featured Rooms</h1>
        <p className="sm:max-w-[25rem] mx-auto text-gray-500 mt-2">Explore our top-rated rooms for the ultimate comfort, luxury, and convenience.</p>
      </div>
      <div className="pt-10">
        {loader ? (
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <>
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {rooms.slice(0, 6).map((room, idx) => (
                <FeaturedRoomsCard key={room._id} idx={idx} room={room}></FeaturedRoomsCard>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Link to="/rooms" className="btn btn-neutral text-white px-7 rounded-full">
                See all
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FeaturedRooms;
