import { useState, useEffect } from "react";
const api = "https://gentle-anchorage-28549.herokuapp.com/roomsapi";

export const useFetch = (roomId = "") => {
  const [rooms, setRooms] = useState([]);

  const getRooms = async () => {
    // console.log("fetching data...");
    const data = await fetch(`${api}/${roomId}`);
    const rooms = await data.json();
    setRooms(rooms);
  };

  useEffect(() => {
    getRooms();
  }, []);
  return rooms;
};
