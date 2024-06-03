import moment from "moment";
import PropTypes from "prop-types";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { MdOutlineEditCalendar } from "react-icons/md";
import Swal from "sweetalert2";
import useAlert from "../../../hooks/useAlert";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const BookingsTableRow = ({ myBooking, getData }) => {
  const { _id, room_id, room_name, price, date } = myBooking;
  const axiosSecure = useAxiosSecure();
  const { successAlert, errorAlert } = useAlert();
  const [startDate, setStartDate] = useState(new Date());

  const handleUpdate = (e) => {
    e.preventDefault();
    // const updatedDate = e.target.date.value;

    if (new Date(date).toLocaleDateString() === startDate.toLocaleDateString()) {
      //   errorAlert("Please select a new date before updating");
      document.getElementById(_id).close();
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please select a new date before updating",
      });
      return;
    }

    // update date
    axiosSecure.patch(`/bookings/${_id}`, { date: startDate }).then((data) => {
      console.log(data.data);
      if (data.data.modifiedCount) {
        successAlert("Date updated Successfully");
        getData();
      }
    });
  };

  // delete booking
  const handleDelete = () => {
    const bookedDate = moment(date);
    const currentDate = moment();
    const deadline = bookedDate.clone().subtract(1, "days");

    if (currentDate.isBefore(deadline, "day")) {
      console.log("cancelable.");

      Swal.fire({
        title: "Are you sure?",
        text: "The booking will be canceled permanently and cannot be reverted!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, confirm!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/bookings/${_id}`).then((data) => {
            console.log(data.data);
            if (data.data.deletedCount > 0) {
              axiosSecure.patch(`/rooms/${room_id}`, { availability: true }).then((data) => {
                console.log(data.data);
                if (data.data.modifiedCount) {
                  Swal.fire({
                    title: "Canceled!",
                    text: "Booking canceled successfully.",
                    icon: "success",
                  });
                  getData();
                }
              });
            }
          });
        }
      });
    } else {
      console.log("cannot cancel");

      Swal.fire({
        icon: "warning",
        title: "Oops...",
        text: "The booking cancelation is only allowed 1 day before the booked date.",
      });
    }
  };
  return (
    <tr className="text-xs sm:text-base">
      <td>{room_name}</td>
      <td>${price}</td>
      <td>{new Date(date).toLocaleDateString()}</td>
      <td>
        <div>
          {/* update date btn */}
          <button
            onClick={() => {
              document.getElementById(_id).showModal();
              setStartDate(new Date(date));
            }}
            className="btn btn-circle min-w-0 w-auto h-auto min-h-0  px-2 md:px-3 py-2 md:py-3 text-xs sm:text-sm font-medium bg-[#4db2ec15] hover:bg-[#4db2ec15] hover:brightness-90 tooltip"
            data-tip="Update booking date"
          >
            <MdOutlineEditCalendar className="text-sm md:text-xl text-[#00a2ff]" />
          </button>

          {/* update date modal */}
          <dialog id={_id} className="modal">
            <div className="modal-box">
              <form id="close_modal" method="dialog" className="flex justify-end">
                <button onClick={() => document.getElementById(`update_date_form-${_id}`).reset()} className="btn btn-sm btn-circle btn-outline btn-error">
                  ✕
                </button>
              </form>
              <div className="card">
                <div className="card-body pt-4">
                  <form id={`update_date_form-${_id}`} onSubmit={handleUpdate} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <label className="text-left font-semibold text-lg">Room Name:</label>
                      <input readOnly type="text" defaultValue={room_name} className="input input-bordered w-full input-disabled text-black" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-left font-semibold text-lg">Price:</label>
                      <input readOnly type="text" defaultValue={"$" + price} className="input input-bordered w-full input-disabled text-black" />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label htmlFor="date" className="text-left font-semibold text-lg">
                        Booking Date:
                      </label>
                      {/* <input required type="date" name="date" defaultValue={date} className="input input-bordered w-full" /> */}
                      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="input input-bordered w-full" />
                    </div>

                    <button className="btn bg-primary-color text-white hover:bg-black h-auto min-h-0 text-base rounded-md py-2 xl:px-7">Update</button>
                  </form>
                </div>
              </div>
            </div>
          </dialog>
        </div>
      </td>
      <td>
        {/* review btn */}
        <button
          className="btn btn-circle min-w-0 w-auto h-auto min-h-0  px-2 md:px-3 py-2 md:py-3 text-xs sm:text-sm font-medium bg-[#52ec4d15] hover:bg-[#52ec4d15] hover:brightness-90 tooltip"
          data-tip="Give a review"
        >
          <FaRegStar className="text-sm md:text-xl text-[#0cb306]" />
        </button>
      </td>
      <td>
        {/* delete button */}
        <button
          onClick={handleDelete}
          className="btn btn-circle min-w-0 w-auto h-auto min-h-0  px-2 md:px-3 py-2 md:py-3 text-xs sm:text-sm font-medium bg-[#ec524d10] hover:bg-[#ec524d15] hover:brightness-90"
          title="Cancel this booking"
        >
          <FaRegTrashAlt className="text-sm md:text-xl text-[#ff3f39]" />
        </button>
      </td>
    </tr>
  );
};

BookingsTableRow.propTypes = {
  myBooking: PropTypes.object,
  getData: PropTypes.func,
};

export default BookingsTableRow;
