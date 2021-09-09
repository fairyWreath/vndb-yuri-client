import React from "react";

interface CarouselImageProps {
  url: string;
}

const CarouselImage = (props: CarouselImageProps) => {
  return (
    <picture className="w-full h-full">
      <img
        className="w-full h-full relative opacity-100 transition-opacity select-none
        block rounded-xl shadow-md"
        src={props.url}
        alt="car_img"
      />
    </picture>
  );
};

export default CarouselImage;
