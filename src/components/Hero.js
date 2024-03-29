import React from "react";
import { AiOutlineDown } from "react-icons/ai";

const Hero = () => {
  return (
    <section>
      <div className="h-[90vh] w-full relative ">
        <img
          src="https://images.unsplash.com/photo-1473116763249-2faaef81ccda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit="
          className="brightness-75"
        />
        <div className="max-w[1140px] h-full m-auto p-2">
          <div className="absolute top-[10%]  max-w-[600px]   p-4 mx-4 flex flex-col gap-7 text-white z-10">
            <h1 className="font-bold">Enjoy your stay in Resort</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae, eveniet adipisci est magni dicta, totam corporis dolor
              optio numquam debitis pariatur sit, consequuntur rerum magnam.
              Rerum consequatur qui ex laboriosam!
            </p>
          </div>
        </div>
        <a
          href="#rooms"
          className="absolute bottom-10 p-4 z-20 left-[50%]  animate-bounce cursor-pointer text-white "
        >
          <AiOutlineDown size={30} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
