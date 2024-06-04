import axios from "axios";
import { signOut } from "firebase/auth";
import { useEffect } from "react";
import auth from "../firebase/firebase.config";
import useAlert from "./useAlert";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const useAxiosSecure = () => {
  // const navigate = useNavigate()
  const { errorAlert } = useAlert();
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        console.log("error inside interceptor", error.message);
        if (error.response.status === 401) {
          signOut(auth)
            .then((result) => {
              console.log(result);
              errorAlert("Your session has expired. Please log in again.");
            })
            .catch((error) => console.log(error));
        }
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
