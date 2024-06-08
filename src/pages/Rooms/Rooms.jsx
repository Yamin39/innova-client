import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { FiSearch } from "react-icons/fi";
import { RiDeleteBin2Line } from "react-icons/ri";
import RoomsCard from "../../components/general/RoomsCard/RoomsCard";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loader, setLoader] = useState(true);
  const [search, setSearch] = useState("");
  const axiosSecure = useAxiosSecure();
  const searchFormRef = useRef();

  const getRooms = (search) => {
    setLoader(true);
    axiosSecure.get(`/rooms?search=${search}`).then((data) => {
      setRooms(data?.data);
      setLoader(false);
    });
  };
  useEffect(() => {
    getRooms();
  }, []);

  const handleFilter = (e) => {
    const range_query = e.target.value;
    setLoader(true);
    axiosSecure.get(`/filter?${range_query}`).then((data) => {
      setRooms(data.data);
      setLoader(false);
    });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchText = e.target.search_box.value;
    setSearch(searchText);
    getRooms(searchText);
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

      <div className="flex justify-center items-center gap-4 my-9">
        <form ref={searchFormRef} onSubmit={handleSearch}>
          <div className="input items-center input-bordered flex justify-center rounded-full shadow-inner text-black pr-1">
            <input list="search_suggestions" name="search_box" type="text" placeholder="Search..." required />
            <div className="p-1">
              <button className="btn btn-circle btn-sm bg-primary-color hover:bg-primary-color hover:brightness-90 text-white">
                <FiSearch className="text-lg" />
              </button>
            </div>
          </div>
        </form>

        <datalist id="search_suggestions">
          {rooms.slice(0, 4).map((room, idx) => (
            <option key={idx} value={room.room_name}></option>
          ))}
        </datalist>

        {search && (
          <button
            className="btn btn-circle btn-error min-h-0 size-9  text-white"
            onClick={() => {
              getRooms();
              setSearch("");
              searchFormRef.current.reset();
            }}
          >
            <RiDeleteBin2Line className="text-lg" />
          </button>
        )}
      </div>

      <div className="pt-10">
        {loader ? (
          <div className="flex justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : rooms.length === 0 ? (
          <h2 className="text-2xl text-center font-semibold text-red-600">No Rooms Found!</h2>
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
