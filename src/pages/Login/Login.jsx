import { useState } from "react";
import { Helmet } from "react-helmet";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImg from "../../assets/images/login.jpg";
import useAlert from "../../hooks/useAlert";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Login = () => {
  const [passToggle, setPassToggle] = useState(false);
  const { successAlert, errorAlert } = useAlert();
  const { logIn, googleLogin } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const axiosSecure = useAxiosSecure();

  // google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => {
        console.log(res.user);
        axiosSecure.post("/jwt", { email: res.user.email }).then((data) => {
          console.log(data.data);
          if (data.data.success) {
            successAlert("Login Successful");
            navigate(state || "/");
          }
        });
      })
      .catch((err) => console.log(err));
  };

  // login with email and password
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // email verification
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      errorAlert("Invalid email address");
      return;
    }

    // password verification
    if (password.length < 6) {
      errorAlert("Password Length must be at least 6 characters");
      return;
    }

    // login
    logIn(email, password)
      .then((res) => {
        console.log(res.user);
        axiosSecure.post("/jwt", { email }).then((data) => {
          console.log(data.data);
          if (data.data.success) {
            successAlert("Login Successful");
            navigate(state || "/");
          }
        });
      })
      .catch((err) => {
        console.error(err);
        if (/invalid-credential/.test(err.message)) {
          errorAlert("Email or Password is wrong");
        } else {
          errorAlert(err.message);
        }
      });
  };
  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center mb-20">
      <Helmet>
        <title>Login | Innova</title>
        <meta name="description" content="Access your account on our hotel booking website" />
      </Helmet>
      <div className="hidden md:block max-w-[40%] min-w-[20.5rem]" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100" data-aos-once={true}>
        <img className="w-full" src={loginImg} />
      </div>

      <div data-aos="fade-up" data-aos-duration="600" data-aos-delay="200" data-aos-once={true}>
        <form onSubmit={handleLogin} className="w-96">
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
              type={passToggle ? "text" : "password"}
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
            <div onClick={() => setPassToggle(!passToggle)} className="absolute top-0 right-3 translate-y-1/2 text-[1.4rem] cursor-pointer">
              {passToggle ? <FaRegEyeSlash /> : <FaRegEye />}
            </div>
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

        <button
          onClick={handleGoogleLogin}
          className="btn btn-outline w-full border-2 border-primary-color h-auto min-h-0 text-base rounded-md py-2 xl:px-7 mt-2"
        >
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
