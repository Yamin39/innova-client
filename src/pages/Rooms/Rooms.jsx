import { useEffect, useState } from "react";
import RoomsCard from "../../components/general/RoomsCard/RoomsCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Rooms = () => {
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
    <div className="mb-24">
      <div className="text-center mb-6">
        <h1 className="text-[3rem] sm:text-[3.45rem] lg:text-5xl font-bold mt-4">All Rooms</h1>
        <p className="sm:max-w-[25rem] mx-auto text-gray-500 mt-2">Discover a variety of rooms tailored to every need and preference.</p>
      </div>



      <div className="pt-10">
        {loader ? (
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room) => (
              <RoomsCard key={room._id} room={room}></RoomsCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Rooms;
