import { useState, useEffect } from "react";

export const useFetch = (roomId = "") => {
  const [rooms, setRooms] = useState([]);

  const getRooms = async () => {
    console.log("fetching data...");
    const data = await fetch(`http://localhost:3000/roomsapi/${roomId}`);
    const rooms = await data.json();
    setRooms(rooms);
  };

  useEffect(() => {
    getRooms();
  }, []);
  return rooms;
};


