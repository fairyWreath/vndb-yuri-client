import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { VnSearchItem } from "../../vndb/VnTypes";
import * as VNDBHelper from "../../vndb/VndbHelpers";
import { LazyLoadImage } from "react-lazy-load-image-component";

interface VisualNovelCardProps {
  vn: VnSearchItem;
  PopRight: boolean;
}

interface BubbleProps {
  PopRight: boolean;
}

const PopupBubble = styled.div<BubbleProps>`
  border-radius: 6px;
  box-shadow: 0px 0px 6px #b2b2b2;

  :after {
    background-color: #fcf7fb;

    /* box-shadow: -2px 2px 2px 0 rgba(178, 178, 178, 0.4); */
    box-shadow: ${(props) => (props.PopRight ? "-2px 2px" : "2px -2px")} 2px 0px
      rgba(178, 178, 178, 0.4);

    content: "";
    display: block;
    height: 14px;

    /* left: -10px; */
    left: ${(props) => (props.PopRight ? "-10px" : "auto")};
    right: ${(props) => (props.PopRight ? "auto" : "-278px")};

    position: relative;
    top: -4rem;
    transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -webkit-transform: rotate(55deg);
    width: 20px;
  }
`;

const CoverLink = styled(Link)`
  :before {
    content: "";
    display: block;
    height: 0;
    width: 0;
    padding-bottom: 142.85714%;
  }
`;

const ImagePlaceholder = () => {
  return (
    <div className="w-full h-full top-0 left-0 rounded-md shadow-md absolute align-text-top bg-accentPrimary" />
  );
};

const VisualNovelCard = (props: VisualNovelCardProps) => {
  const [expand, setExpand] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const PopupDir = () => {
    if (props.PopRight) return "left-56";
    return "right-56";
  };

  return (
    <motion.div
      className="w-full rounded-md text-dark hover:text-primary relative
        grid grid-rows-min-content-auto"
      initial={{ opacity: 0.5, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      onMouseOver={() => setExpand(true)}
      onMouseLeave={() => setExpand(false)}
    >
      <CoverLink
        to={"/vn/" + props.vn.id}
        className="w-full inline-block h-auto
      relative overflow-hidden z-20"
      >
        <LazyLoadImage
          src={props.vn.image.src}
          alt="vn_card_image"
          className={`w-full h-full top-0 left-0 object-cover rounded-md shadow-md absolute align-text-top ${
            imageLoaded ? "visible" : "hidden"
          }`}
          onLoad={() => setImageLoaded(true)}
          placeholder={ImagePlaceholder()}
          // useIntersectionObserver={true}
        />
        {!imageLoaded && <ImagePlaceholder />}
      </CoverLink>

      <Link
        className="title py-2 text-base font-medium"
        to={"/vn/" + props.vn.id}
      >
        {props.vn.title}
      </Link>

      {expand && (
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.1 }}
          className={`lg1s:hidden block  absolute z-30 
           top-5 text-sm ${PopupDir()}`}
        >
          <PopupBubble
            PopRight={props.PopRight}
            className="w-72 bg-accentSecondary rounded-md"
          >
            <div className="px-5 pt-3 pb-4 h-full w-full ">
              <div className="flex justify-between">
                <div className="title text-darkAccent mb-2 italic text-base w-52">
                  <span className="not-italic text-dark">Developer: {""}</span>
                  {props.vn.producers[props.vn.producers.length - 1]}
                </div>
                <div className="score text-green-500 text-base">
                  {(props.vn.rating / 100).toFixed(2)}
                </div>
              </div>
              <div className="text-primary mb-1">
                {VNDBHelper.parseDate(props.vn.released)}
              </div>
              <div className="info text-dark mb-2">{props.vn.length}</div>
              <div className="flex mb-3">
                {props.vn.languages.slice(0, 3).map((lang, index) => (
                  <div
                    className="bg-primary text-light text-sm px-2 rounded-lg mr-1 flex text-center items-center"
                    key={index}
                  >
                    {VNDBHelper.getFullLanguageName(lang.trim())}
                  </div>
                ))}
              </div>
              <div className="flex mb-0 bottom-0">
                {props.vn.platforms.slice(0, 3).map((plat, index) => (
                  <div
                    className="bg-darkAccent text-light text-sm px-2 rounded-lg mr-1 text-center flex items-center"
                    key={index}
                  >
                    {VNDBHelper.getFullPlatformName(plat.trim())}
                  </div>
                ))}
              </div>
            </div>
          </PopupBubble>
        </motion.div>
      )}
    </motion.div>
  );
};

export default VisualNovelCard;
