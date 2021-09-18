import React, { useState, useEffect } from "react";
import Carousel from "../carousel/Carousel";
import Gallery from "./Gallery";
import { VnImage } from "../../vndb/VnTypes";
import { IoIosEyeOff } from "react-icons/io";
import { IoIosEye } from "react-icons/io";

interface Props {
  screenshots: VnImage[];
}

const Screenshots = (props: Props) => {
  const [images, setImages] = useState<string[]>(
    props.screenshots
      .filter((screen) => {
        return screen.nsfw === "0" && screen.violence === "0";
      })
      .map((screen) => screen.src)
  );
  const [NSFW, setNSFW] = useState(false);

  useEffect(() => {
    if (NSFW) {
      setImages(props.screenshots.map((screen) => screen.src));
    } else {
      setImages(
        props.screenshots
          .filter((screen) => {
            return screen.nsfw === "0" && screen.violence === "0";
          })
          .map((screen) => screen.src)
      );
    }
  }, [NSFW]);

  return (
    <div className="relative bg-accentTertiary w-full">
      <div className="hidden flex-row w-full justify-between pb-4 px-4">
        <div className="text-accentPrimary"></div>
        <div
          className=" hover:text-darkAccent text-dark text-lg
        cursor-pointer flex flex-row items-center justify-center"
          onClick={() => {
            setNSFW(!NSFW);
          }}
        >
          <div className="mx-2">NSFW</div>
          {NSFW ? <IoIosEye size="16px" /> : <IoIosEyeOff size="16px" />}
        </div>
      </div>
      <Gallery images={images} />
    </div>
  );
};

export default Screenshots;
