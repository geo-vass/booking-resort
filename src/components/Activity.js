import React from "react";

const Activity = ({ title, img }) => {
  return (
    <article className="relative p-4 w-[80%] mx-auto">
      <h3 className="absolute  left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl font-bold text-white text-center z-10">
        {title}
      </h3>
      <img
        src={img}
        className="border-4 border-white shadow-lg brightness-90"
      />
    </article>
  );
};

export default Activity;
