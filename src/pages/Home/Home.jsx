import { useEffect } from "react";
import { Link } from "react-router-dom";
import modalImg from "../../assets/images/modalImg.png";
import Banner from "../../components/general/Banner/Banner";
import FeaturedRooms from "../../components/general/FeaturedRooms/FeaturedRooms";
import SpecialOffers from "../../components/general/SpecialOffers/SpecialOffers";
import Testimonials from "../../components/general/Testimonials/Testimonials";

const Home = () => {
  useEffect(() => {
    const openModal = () => {
      document.getElementById("offer_modal").showModal();
    };
    openModal();
  }, []);
  return (
    <div>
      <Banner></Banner>
      <FeaturedRooms></FeaturedRooms>
      <SpecialOffers></SpecialOffers>
      <Testimonials></Testimonials>

      <dialog id="offer_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-error absolute right-2 top-2">✕</button>
          </form>
          <img src={modalImg} />
          <div className="text-center mb-6">
            <h1 className="text-[3rem] sm:text-[3.45rem] lg:text-5xl font-bold">Don&apos;t Miss Out!</h1>
            <p className="sm:max-w-[25rem] mx-auto text-gray-500 mt-2">Book now & save on your stay. Limited time offer.</p>
            <Link to="/rooms" className="btn bg-primary-color text-white hover:bg-black h-auto min-h-0 text-base rounded-md py-2 xl:px-7 mt-6">
              Book Now
            </Link>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Home;
