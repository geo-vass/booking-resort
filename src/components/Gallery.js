import React from "react";

const Gallery = () => {
  return (
    <section id="gallery" className="mt-4 p-4 max-w-[1140px] m-auto w-full">
      <h2 className="text-center mb-10">Gallery</h2>
      <div className="grid gap-4 md:grid-cols-5 ">
        <div className="md:col-span-3 col-span-2 row-span-2">
          <img
            src="https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="/"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="/"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="/"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="/"
          />
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="/"
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
