import PropTypes from "prop-types";
import { GiRoundStar } from "react-icons/gi";
import { MdOutlineEditCalendar } from "react-icons/md";

const BookingsTableRow = ({ myBooking }) => {
  const { _id, room_name, price, date } = myBooking;
  return (
    <tr className="text-xs sm:text-base">
      <td>{room_name}</td>
      <td>${price}</td>
      <td>{date}</td>
      <td>
        <div>
          {/* update date btn */}
          <button
            onClick={() => document.getElementById(_id).showModal()}
            className="btn btn-circle min-w-0 w-auto h-auto min-h-0  px-2 md:px-3 py-2 md:py-3 text-xs sm:text-sm font-medium bg-[#4db2ec15] hover:bg-[#4db2ec15] hover:brightness-90 tooltip"
            data-tip="Update booking date"
          >
            <MdOutlineEditCalendar className="text-sm md:text-xl" />
          </button>

          {/* update date modal */}
          <dialog id={_id} className="modal">
            <div className="modal-box">
              <form method="dialog" className="flex justify-end">
                <button className="btn btn-sm btn-circle btn-outline btn-error">✕</button>
              </form>
              <div className="card">
                <div className="card-body pt-0">
                  <div className="mt-1"></div>
                  <form
                    //  onSubmit={handleConfirmBooking}
                    className="flex flex-col gap-4"
                  >
                    <label htmlFor="date" className="font-semibold text-lg">
                      Booking Date:
                    </label>
                    <div>
                      <input required type="date" name="date" defaultValue={date} className="input input-bordered w-full" />
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
        <button
          className="btn btn-circle min-w-0 w-auto h-auto min-h-0  px-2 md:px-3 py-2 md:py-3 text-xs sm:text-sm font-medium bg-[#52ec4d15] hover:bg-[#52ec4d15] hover:brightness-90 tooltip"
          data-tip="Give a review"
        >
          <GiRoundStar className="text-sm md:text-xl" />
        </button>
      </td>
      <td>
        <button className="btn h-auto min-h-0 btn-error px-2 md:px-5 py-2 md:py-3 rounded text-xs sm:text-sm font-medium text-white">Cancel</button>
      </td>
    </tr>
  );
};

BookingsTableRow.propTypes = {
  myBooking: PropTypes.object,
};

export default BookingsTableRow;
