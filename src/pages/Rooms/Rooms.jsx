import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
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

  const handleFilter = (e) => {
    const range_query = e.target.value;
    setLoader(true);
    axiosSecure.get(`/filter?${range_query}`).then((data) => {
      setRooms(data.data);
      setLoader(false);
    });
  };
  return (
    <div className="mb-24">
      <Helmet>
        <title>Room | Innova</title>
        <meta name="description" content="Discover a wide range of hotel rooms available for booking." />
      </Helmet>
      <div className="text-center mb-6" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" data-aos-once={true}>
        <h1 className="text-[3rem] sm:text-[3.45rem] lg:text-5xl font-bold mt-4">All Rooms</h1>
        <p className="sm:max-w-[25rem] mx-auto text-gray-500 mt-2">Discover a variety of rooms tailored to every need and preference.</p>
      </div>

      <div className="mt-4 text-center" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200" data-aos-once={true}>
        <select onChange={handleFilter} name="price_range" className="select select-bordered">
          <option disabled selected>
            Filter by price range
          </option>
          <option value={"gte=0&lte=100"}>0 - 100</option>
          <option value={"gte=101&lte=200"}>101 - 200</option>
          <option value={"gte=201&lte=300"}>201 - 300</option>
          <option value={"gte=301&lte=500"}>301 - 500</option>
        </select>
      </div>

      <div className="pt-10">
        {loader ? (
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room, idx) => (
              <RoomsCard key={room._id} idx={idx} room={room}></RoomsCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Rooms;
