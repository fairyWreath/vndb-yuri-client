import React, { useState } from "react";
import Carousel from "../../components/carousel/Carousel";

interface Props {}

const screenShotImages = [
  "https://s2.vndb.org/sf/79/92579.jpg",
  "https://s2.vndb.org/sf/75/92575.jpg",
  "https://s2.vndb.org/sf/81/92581.jpg",
];

const VisualNovelDetailsPage = (props: Props) => {
  return (
    <div className="flex flex-column justify-start items-center bg-light">
      <Carousel slides={screenShotImages}></Carousel>

      <div></div>
    </div>
  );
};

export default VisualNovelDetailsPage;
