import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar/Navbar";
import { Flip, ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="max-w-[1440px] w-10/12 mx-auto font-dm-sans">
      <Navbar></Navbar>
      <Outlet></Outlet>
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
