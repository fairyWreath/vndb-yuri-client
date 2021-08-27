import React from "react";
import styled from "styled-components";

interface CarouselImageProps {
  url: string;
}

const StyledPicture = styled.picture`
  width: 100%;
  height: 100;

  img {
    width: 100%;
    height: 100;
    position: relative;
    opacity: 1;
    transition: opacity 125ms ease-in-out 450ms;
    user-select: none;
    display: block;
    border-radius: 12px;
  }
`;

const CarouselImage = (props: CarouselImageProps) => {
  return (
    <StyledPicture>
      <img src={props.url} alt=""></img>
    </StyledPicture>
  );
};

export default CarouselImage;
