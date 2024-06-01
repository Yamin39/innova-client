import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import loginImg from "../../assets/images/login.jpg";

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center">
      <div className="hidden md:block max-w-[40%] min-w-[20.5rem]">
        <img className="w-full" src={loginImg} />
      </div>

      <div>
        <form className="w-96">
          <div className="text-center mb-6">
            <h1 className="text-[3rem] sm:text-[3.45rem] lg:text-5xl font-bold mt-4">Login</h1>
            <p className="text-gray-500 mt-2">Login to access your account</p>
          </div>

          {/* email */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="email"
              name="email"
              id="email"
              className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address
            </label>
          </div>

          {/* password */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="password"
              name="password"
              id="password"
              className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="password"
              className="peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
          </div>

          <button type="submit" className="btn w-full bg-primary-color text-white hover:bg-black h-auto min-h-0 text-base rounded-md py-2 xl:px-7 mt-2">
            Login
          </button>
        </form>

        <div className="flex justify-center gap-5 items-center my-6">
          <hr className="flex-1 border-b border-b-slate-400" />
          <p className="text-gray-500">Social Login</p>
          <hr className="flex-1 border-b border-b-slate-400" />
        </div>

        <button className="btn btn-outline w-full border-2 border-primary-color h-auto min-h-0 text-base rounded-md py-2 xl:px-7 mt-2">
          <FcGoogle />
          Google
        </button>

        <p className="text-gray-600 text-center mt-6">
          Don&apos;t have any account?{" "}
          <Link className="text-primary-color font-medium underline" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
