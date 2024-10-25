"use-client";
import Image from "next/image";
import React from "react";

interface ImagT {
  src: string;
  alt: string;
}

const images: ImagT[] = [
  {
    src: "/images/pic-1.jpg",
    alt: "image-1",
  },
  {
    src: "/images/pic-2.jpg",
    alt: "image-2",
  },
  {
    src: "/images/pic-3.jpg",
    alt: "image-3",
  },
];

const Images = () => {
  return (
    <div>
      <div className="md:flex justify-between items-center gap-2 hidden ">
        {images.map((items, index) => (
          <Image
            src={items.src}
            alt={items.alt}
            key={index}
            width={200}
            height={250}
            className="shadow-xl "
          />
        ))}
      </div>
    </div>
  );
};

export default Images;
