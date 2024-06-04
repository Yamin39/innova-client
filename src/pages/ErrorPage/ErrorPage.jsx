import Lottie from "lottie-react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import animation404 from "../../assets/animations/animation404.json";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row gap-4 justify-center items-center font-dm-sans">
      <Helmet>
        <title>404 | Innova</title>
        <meta name="description" content="Oops! Page not found" />
      </Helmet>
      <div>
        <Lottie className="max-w-[24rem]" animationData={animation404} />
      </div>
      <div>
        <h4 className="text-3xl sm:text-5xl font-medium mt-4">Not Found</h4>
        <p className="sm:text-lg font-medium max-w-96 mx-auto mt-3 sm:mt-5 mb-3">
          Something went wrong or <br /> The page you are looking is doesn&apos;t exist!
        </p>
        <Link to="/" className="btn bg-primary-color text-white hover:bg-black h-auto min-h-0 text-base rounded-md py-2 xl:px-7 mt-4">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
