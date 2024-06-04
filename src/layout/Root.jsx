import { Outlet } from "react-router-dom";
import { Flip, ToastContainer } from "react-toastify";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";

const Root = () => {
  return (
    <div className="max-w-[1440px] w-10/12 mx-auto font-dm-sans">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Flip}
      />
    </div>
  );
};

export default Root;
