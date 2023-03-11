import React from "react";

const Gallery = ({ gallery }) => {
  if (!gallery || !gallery.length) return;

  const maxPics = 5;
  const totalPics = gallery.length;

  return (
    <section
      id="gallery"
      className="mt-2 p-4 max-w-[1140px] m-auto w-full relative z-10 "
    >
      <div className="grid gap-4 md:grid-cols-5 md:grid-rows-[150px_150px] ">
        <div className="md:col-span-3 col-span-2 row-span-2  h-full">
          <img className="rounded-md" src={gallery && gallery[0]} alt="/" />
        </div>
        {gallery?.map((img, index) => {
          if (index > 0 && index < maxPics - 1) {
            return (
              <div className="h-full" key={index}>
                <img className="rounded-md" src={img} alt="/" />
              </div>
            );
          }
          //Show how many pics are available
          if (index === maxPics - 1) {
            return (
              <div className="relative" key={index}>
                <div className="absolute  left-[50%] bottom-[0%] translate-x-[-50%]  z-10 bg-slate-900/40 p-2 w-full h-full translate-y-[0%] cursor-pointer flex items-center justify-center rounded-md">
                  <h3 className=" text-xl font-bold text-white text-center underline">
                    {totalPics} pics
                  </h3>
                </div>
                <img className="rounded-md" src={img} alt="/" />
              </div>
            );
          }
        })}
      </div>
    </section>
  );
};

export default Gallery;
