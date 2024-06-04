import { useState } from "react";
import { Helmet } from "react-helmet";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import registerImg from "../../assets/images/register.jpeg";
import useAlert from "../../hooks/useAlert";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Register = () => {
  const { createUser, updateUserNameImg, setLoading, loader, setLoader } = useAuth();
  const { successAlert, errorAlert } = useAlert();
  const navigate = useNavigate();
  const [passToggle, setPassToggle] = useState(false);
  const axiosSecure = useAxiosSecure();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;

    // email verification
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      errorAlert("Invalid email address");
      return;
    }

    // pass verification
    if (!/[A-Z]/.test(password)) {
      errorAlert("Password should contain at least an Uppercase letter");
      return;
    }

    if (!/[a-z]/.test(password)) {
      errorAlert("Password should contain at least a Lowercase letter");
      return;
    }

    if (password.length < 6) {
      errorAlert("Password Length must be at least 6 character");
      return;
    }

    // register
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        updateUserNameImg(res.user, name, photoUrl)
          .then((result) => {
            console.log(result);
            setLoader(!loader);
            axiosSecure.post("/jwt", { email }).then((data) => {
              console.log(data.data);
              if (data.data.success) {
                successAlert("Registration Successful");
                navigate("/");
              }
            });
          })
          .catch((error) => {
            console.error(error);
            errorAlert(error.message);
          });
      })
      .catch((err) => {
        const error = err.message;
        console.error(error);
        if (/email-already-in-use/.test(error)) {
          errorAlert("Email already in use");
        } else {
          errorAlert(error);
        }
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col lg:flex-row-reverse justify-evenly items-center mb-20">
      <Helmet>
        <title>Register | Innova</title>
        <meta name="description" content="Create your account on our hotel booking website" />
      </Helmet>
      <div className="hidden md:block max-w-[45%] min-w-[20.5rem]">
        <img className="w-full" src={registerImg} />
      </div>

      <div>
        <form onSubmit={handleRegister} className="w-96">
          <div className="text-center mb-6">
            <h1 className="text-[3rem] sm:text-[3.45rem] lg:text-5xl font-bold mt-4">Register</h1>
            <p className="text-gray-500 mt-2">Create an account</p>
          </div>

          {/* name */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="name"
              id="name"
              className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="name"
              className="peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>

          {/* photoUrl */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="photoUrl"
              id="photoUrl"
              className="block py-2.5 px-0 w-full bg-transparent border-0 border-b-2 border-gray-400 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="photoUrl"
              className="peer-focus:font-medium absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Photo URL
            </label>
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
            Register
          </button>
        </form>

        <p className="text-gray-600 text-center mt-6">
          Already have an account?{" "}
          <Link className="text-primary-color font-medium underline" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
