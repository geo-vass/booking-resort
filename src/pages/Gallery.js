import React from "react";

const Gallery = ({ gallery }) => {
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
          if (index > 0 && index < 5) {
            return (
              <div className="h-full">
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
