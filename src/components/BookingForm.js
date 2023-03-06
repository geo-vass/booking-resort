import React, { useEffect, useState, useRef } from "react";

const BookingForm = ({ rooms, startingPrice }) => {
  const optionRef = useRef();

  const [pricePerNight, setpricePerNight] = useState("0");
  const [interval, setInterval] = useState({
    from: "",
    to: "",
  });
  const [nights, setnights] = useState(0);

  useEffect(() => {
    if (rooms.length === 0) return;
    console.log({ rooms });
    setpricePerNight(rooms[0].startingPrice);
  }, [rooms]);
  const calculateStartPrice = () => {
    const newStartingPrice = rooms.find(
      (room) => room.id === optionRef.current.selectedIndex + 1
    ).startingPrice;
    setpricePerNight(newStartingPrice);
  };

  //calculate min date
  //used for both "from" and "to" values
  //"to" value is also recalculated based on "from" value
  const calculateMinDate = (date) => {
    if (!date) return new Date().toISOString().split("T")[0];
    var minDate = new Date(date);
    minDate.setDate(minDate.getDate() + 1);
    return minDate.toISOString().split("T")[0];
  };

  //calculate total nights of stay
  const calculateStay = () => {
    const { from, to } = interval;
    if (!from || !to) return 0;
    const ms = new Date(to) - new Date(from);

    //do not show price if "from" date is later than "to" date
    if (ms < 0) {
      setInterval({ ...interval, to: "" });
    }
    return Math.ceil(ms / (1000 * 3600 * 24));
  };

  //calculate stay every time the interval (from, to dates) changes
  useEffect(() => {
    console.log(interval);
    const nights = calculateStay();
    setnights(nights);
  }, [interval]);

  return (
    <section
      id="deals"
      className="mt-4 p-4 max-w-[1140px] m-auto w-full relative z-10 "
    >
      <h2 className="text-center mb-10">Book Now</h2>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex flex-col lg:flex-row gap-6 mx-auto w-full lg:items-center"
      >
        <div className="flex flex-col min-w-[300px]">
          <label htmlFor="room">Available Rooms:</label>
          <select
            name="room"
            id="room"
            ref={optionRef}
            onChange={calculateStartPrice}
          >
            {rooms.map((room) => (
              <option value={room.id}>{room.title}</option>
            ))}
          </select>
        </div>

        <div className="flex sm:flex-row flex-col justify-center gap-6">
          <div className="flex flex-col flex-1">
            <label htmlFor="checkin">Check-in:</label>
            <input
              type="date"
              id="checkin"
              required
              min={calculateMinDate()}
              onChange={(e) =>
                setInterval({ ...interval, from: e.target.value })
              }
            />
          </div>
          <div className="flex flex-col flex-1">
            <label htmlFor="checkout">Check-out:</label>
            <input
              type="date"
              id="checkout"
              min={calculateMinDate(interval.from)}
              required
              onChange={(e) => setInterval({ ...interval, to: e.target.value })}
            />
          </div>
        </div>
        <div className="lg:self-end flex-1">
          <button className="w-full ">Book Now</button>
        </div>
      </form>
      <div className="mt-8 items-center  flex   gap-3 min-w-[200px]">
        <strong>
          {nights ? `Price for ${nights} nights:` : "Add dates for prices"}
        </strong>
        <p>
          <span className="font-bold text-2xl">
            {nights ? `${nights * pricePerNight} € total` : ""}
          </span>
        </p>
      </div>
      <p className="mt-4">{pricePerNight} € per night </p>
    </section>
  );
};

export default BookingForm;
