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
    <div className="md:flex justify-center items-center gap-2 hidden ">
      {images.map((items, index) => (
        <Image
          src={items.src}
          alt={items.alt}
          key={index}
          width={150}
          height={250}
          className="object-contain aspect-square "
        />
      ))}
    </div>
  );
};

export default Images;
