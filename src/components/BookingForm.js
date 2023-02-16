import React from "react";

const BookingForm = () => {
  return (
    <section className="mt-4 p-4 max-w-[1140px] m-auto w-full md:flex">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex sm:flex-col md:flex-row justify-between gap-10 mx-auto w-full"
      >
        <div className="flex flex-col min-w-[400px]">
          <label htmlFor="room">Available Rooms:</label>
          <select name="room" id="room">
            <option value="room#1">Room #1</option>
            <option value="room#2">Room #2</option>
            <option value="room#3">Room #3</option>
            <option value="room#4">Room #4</option>
          </select>
        </div>
        <div className="flex justify-center gap-10">
          <div className="flex flex-col flex-1">
            <label htmlFor="checkin">Check-in:</label>
            <input
              type="date"
              id="checkin"
              placeholder="dd-mm-yyyy"
              min="2017-04-01"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="checkout">Check-out:</label>
            <input type="date" id="checkin" />
          </div>
        </div>
        <div>
          <button className="w-full">Pricing & Availability</button>
        </div>
      </form>
    </section>
  );
};

export default BookingForm;
