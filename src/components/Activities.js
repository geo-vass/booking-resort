import React from "react";
import Activity from "./Activity";

const Activities = () => {
  return (
    <section className="max-w-[1140px] m-auto w-full md:flex mt-[-50px]">
      <Activity
        title="Fishing"
        img="https://plus.unsplash.com/premium_photo-1664456329454-ef3c5dd850a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
      />
      <Activity
        title="Hiking"
        img="https://images.unsplash.com/photo-1587502537745-84b86da1204f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <Activity
        title="Scooba Diving"
        img="https://images.unsplash.com/photo-1570367364062-4ab01ebf0954?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
      />
    </section>
  );
};

export default Activities;
