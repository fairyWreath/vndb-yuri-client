import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import CarouselTrack from "./CarouselTrack";
import CarouselImage from "./CarouselImage";

interface CarouselProps {
  slides: string[];
}

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  background: transparent;

  ul {
    /* center in index, 100 - VIEWPORT of MAX/MIN WIDTH */
    transform: translate3d(${(100 - 60) / 2}vw, 0, 0);
    display: flex;
    position: relative;
    margin: 0px;
    padding: 0px;
    list-style: none;

    li {
      min-width: 60vw;
      max-width: 60vw;
      padding-right: 15px;
      padding-left: 15px;
    }
  }
`;

const Carousel = (props: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = props.slides.length;

  const next = () => {
    setCurrentIndex(
      currentIndex === length - 1 ? currentIndex : currentIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex(currentIndex === 0 ? currentIndex : currentIndex - 1);
  };

  const [onImagesHover, setImagesHover] = useState(true);

  return (
    <Wrapper
      onMouseEnter={() => setImagesHover(true)}
      onMouseLeave={() => setImagesHover(false)}
    >
      <div>
        <CarouselTrack slideIndex={currentIndex} slideWidth={60}>
          <ul>
            {props.slides.map((url, i) => {
              return (
                <li key={i}>
                  <CarouselImage url={url} />
                </li>
              );
            })}
          </ul>
        </CarouselTrack>
      </div>
      {onImagesHover && (
        <div
          className="w-screen h-full absolute top-0 flex justify-between items-center z-10
      opacity-100 pointer-events-none"
        >
          <div className="relative p-5 text-dark hover:text-darkAccent cursor-pointer pointer-events-auto">
            <IoIosArrowBack
              size="40px"
              onClick={() => {
                prev();
              }}
            />
          </div>
          <div className="relative p-5 text-dark hover:text-darkAccent cursor-pointer pointer-events-auto">
            <IoIosArrowForward
              size="40px"
              onClick={() => {
                next();
              }}
            />
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Carousel;
