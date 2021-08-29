import React, { useState } from "react";
import Carousel from "../../components/carousel/Carousel";

interface Props {}

const screenShotImages = [
  "https://s2.vndb.org/sf/79/92579.jpg",
  "https://s2.vndb.org/sf/75/92575.jpg",
  "https://s2.vndb.org/sf/81/92581.jpg",
];

const descriptionRaw =
  'Erika/Chidori: "Have you ever thought of wanting to do something for the one you love?"\n\nThis is the all-age sequel to FLOWERS -Le volume sur printemps-. In the season of first meetings, a girl with a wounded heart, Suou, found a friend and lover who would accept her. However, this friend and lover left the school without telling her the reason at the end of spring. Suou was in denial about her loss, and fellow bookworm Erika was gravely worried and looked for a way to heal Suou’s broken heart.\n\nWith the early arrival of summer, a girl named Chidori transferred into the school. She met Erika by accident when Erika was coming back to the dorm and told Erika that she was a coward for stalking her. It was the worst first meeting for the two who would end up becoming each other\'s "Amitié."';

const description = descriptionRaw.split("\n").map((i, key) => {
  return <div key={key}>{i}</div>;
});

const VisualNovelDetailsPage = (props: Props) => {
  return (
    <div className="flex flex-col justify-start items-center bg-light">
      <Carousel slides={screenShotImages}></Carousel>

      <div
        className="flex flex-row justify-end items-start bg-accentPrimary w-full
      px-8 py-5"
      >
        <div className="flex flex-col justify-start mr-8 ml-16">
          <div className="italic text-3xl mb-8 text-right text-darkAccent">
            Hakuisei Aijou Izonshou
          </div>
          <div className="text-lg text-right text-dark hover:text-darkAccent">
            {description}
          </div>
        </div>
        <img
          className="rounded-lg w-titleImageMedium h-auto"
          src="https://s2.vndb.org/cv/09/27609.jpg"
        />
      </div>
      <div></div>
    </div>
  );
};

export default VisualNovelDetailsPage;
