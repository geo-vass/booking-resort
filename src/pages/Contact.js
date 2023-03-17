import React from "react";

const Contact = () => {
  return (
    <section
      id=""
      className=" p-4 max-w-[1140px] m-auto w-full  gap-2 relative z-10 text-sm"
    >
      <div className="mt-5 flex sm:flex-row flex-col gap-5 md:max-h-[400px]">
        <div className="w-full relative hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1443397646383-16272048780e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="/"
            className="brightness-75"
          />
          <div className="absolute top-0  p-4 text-white ">
            <h2 className="mb-1 ">Contact Us</h2>
            <p className="text-sm  text-gray-100 ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
              in quae neque, hic a iure voluptas quidem.
            </p>
          </div>
        </div>
        <form className="w-full" id="form" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-2 h-full justify-between">
            <div className="flex flex-col">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                required
              />
            </div>
            <button>Send your message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
