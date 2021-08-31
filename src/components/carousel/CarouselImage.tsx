import React from "react";
import styled from "styled-components";

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
      />
    </picture>
  );
};

export default CarouselImage;
