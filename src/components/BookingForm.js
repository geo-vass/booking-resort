import React from "react";

const BookingForm = () => {
  return (
    <section
      id="deals"
      className="mt-4 p-4 max-w-[1140px] m-auto w-full relative z-10"
    >
      <h2 className="text-center mb-10">Book Now</h2>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col lg:flex-row gap-6 mx-auto w-full lg:items-center"
      >
        <div className="flex flex-col min-w-[300px]">
          <label htmlFor="room">Available Rooms:</label>
          <select name="room" id="room">
            <option value="room#1">Room #1</option>
            <option value="room#2">Room #2</option>
            <option value="room#3">Room #3</option>
            <option value="room#4">Room #4</option>
          </select>
        </div>
        <div className="flex sm:flex-row flex-col justify-center gap-6">
          <div className="flex flex-col flex-1">
            <label htmlFor="checkin">Check-in:</label>
            <input type="date" id="checkin" required />
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="checkout">Check-out:</label>
            <input type="date" id="checkout" required />
          </div>
        </div>
        <div className="lg:self-end flex-1">
          <button className="w-full ">Pricing & Availability</button>
        </div>
      </form>
    </section>
  );
};

export default BookingForm;
