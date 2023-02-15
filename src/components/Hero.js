import React from "react";
// import * as hero from "../../public/images";

const Hero = () => {
  return (
    <section>
      <div className="h-[90vh] w-full">
        <img
          src="https://images.unsplash.com/photo-1629361818222-9a717bbcb97c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop"
          className="h-full w-full object-cover brightness-75"
        />
        <div className="absolute top-[35%] max-w-[600px] left-0 right-0 p-4 mx-auto flex flex-col gap-3 text-white">
          <h1 className="text-4xl font-bold">Enjoy your stay in Resort</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Recusandae, eveniet adipisci est magni dicta, totam corporis dolor
            optio numquam debitis pariatur sit, consequuntur rerum magnam. Rerum
            consequatur qui ex laboriosam!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
