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
    setCurrentIndex(currentIndex === length ? currentIndex : currentIndex + 1);
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
          className="w-full h-full absolute top-0 flex justify-between items-center z-10
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

// import React, { useState } from "react";

// import { IoIosArrowForward } from "react-icons/io";
// import { IoIosArrowBack } from "react-icons/io";

// interface Props {}

// const screenShotImages = [
//   "https://s2.vndb.org/sf/79/92579.jpg",
//   "https://s2.vndb.org/sf/75/92575.jpg",
//   "https://s2.vndb.org/sf/81/92581.jpg",
// ];
// const Carousel = (props: Props) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const length = screenShotImages.length;

//   const next = () => {
//     setCurrentIndex(currentIndex === length - 1 ? 0 : currentIndex + 1);
//   };

//   const prev = () => {
//     setCurrentIndex(currentIndex === 0 ? length - 1 : currentIndex - 1);
//   };
//   return (
//     <div className="flex flex-column justify-start items-center bg-light">
//       <div className="w-full bg-light flex flex-column justify-between items-center">
//         <div
//           className="cursor-pointer flex flex-row justify-center w-full text-dark
//     hover:text-darkAccent"
//         >
//           <IoIosArrowBack
//             size="60px"
//             onClick={() => {
//               prev();
//             }}
//           />
//         </div>
//         <img
//           className="rounded-lg max-w-screenImageLarge max-h-screenImageLarge cursor-pointer select-none"
//           src={screenShotImages[currentIndex]}
//           alt="visual_novel_screenshot_image"
//         />
//         <div
//           className="cursor-pointer flex flex-row justify-center w-full text-dark
//     hover:text-darkAccent"
//         >
//           <IoIosArrowForward
//             size="60px"
//             onClick={() => {
//               next();
//             }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Carousel;

{
  /* <div className="overflow-hidden relative w-full">
        <ul className="flex relative m-0 w-0 list-none px-2">
          {props.slides.map((src) => {
            return (
              <li className="px-5 pb-4">
                <img
                  className="rounded-lg max-w-screenImageMedium max-h-screenImageMedium
                  2xl:max-w-screenImageLarge 2xl:max-h-screenImageLarge
                  cursor-pointer select-none
                  relative opacity-100 block transition-opacity duration-450"
                  src={src}
                  alt="visual_novel_screenshot_image"
                />
              </li>
            );
          })}
        </ul>
      </div> */
}
