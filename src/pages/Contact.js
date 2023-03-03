import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mt-4 p-4 max-w-[1140px] m-auto w-full  gap-2 relative z-10"
    >
      <h2 className="mb-1 text-center">Contact Us</h2>
      <p className="text-gray-500 text-sm text-center max-w-[500px] m-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi in
        quae neque, hic a iure voluptas quidem.
      </p>
      <div className="mt-10 flex sm:flex-row flex-col gap-5">
        <div className="w-full">
          <img
            src="https://images.unsplash.com/photo-1443397646383-16272048780e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="/"
          />
        </div>
        <form className="w-full" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col gap-5 ">
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
