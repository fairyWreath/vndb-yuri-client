import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { VnSearchItem } from "../../vndb/VnTypes";
import * as VNDBHelper from "../../vndb/VndbHelpers";

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
    height: 20px;

    /* left: -10px; */
    left: ${(props) => (props.PopRight ? "-10px" : "auto")};
    right: ${(props) => (props.PopRight ? "auto" : "-278px")};

    position: relative;
    top: -4rem;
    transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    width: 20px;
  }
`;

const VisualNovelCard = (props: VisualNovelCardProps) => {
  const [expand, setExpand] = useState(false);

  const PopupDir = () => {
    if (props.PopRight) return "left";
    return "right";
  };

  return (
    <div
      className="relative w-44 h-60 lg:w-52 lg:h-96"
      onMouseOver={() => setExpand(true)}
      onMouseLeave={() => setExpand(false)}
    >
      <motion.div
        className="item w-full h-full rounded text-dark hover:text-primary relative"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-full h-72 relative">
          <Link to={"/vn/" + props.vn.id}>
            <img
              src={props.vn.image.src}
              alt="vn_card_image"
              className="w-full h-full rounded-md shadow-md"
            />
          </Link>
        </div>
        <div className="title min-h-12 py-2 overflow-hidden text-base font-medium ">
          <Link to={"/vn/" + props.vn.id}>{props.vn.title}</Link>
        </div>
      </motion.div>

      {true && (
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className={`hidden lg:block  absolute z-30 rounded-md
           top-5 text-sm ${PopupDir().concat("-56")} left-56 `}
        >
          <PopupBubble
            PopRight={props.PopRight}
            className="bg-accentSecondary w-72 h-auto"
          >
            <div className="px-5 py-3 h-full w-full">
              <div className="flex justify-between">
                <div className="title text-darkAccent mb-2 italic text-base">
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
                    className="bg-primary text-light text-sm px-2 rounded-lg mr-1 flex text-center items-center
                    py-2"
                    key={index}
                  >
                    {VNDBHelper.getFullLanguageName(lang.trim())}
                  </div>
                ))}
              </div>
              <div className="flex">
                {props.vn.platforms.slice(0, 3).map((plat, index) => (
                  <div
                    className="bg-dark text-light text-sm px-2 rounded-lg mr-1 text-center flex items-center
                    py-2"
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
    </div>
  );
};

export default VisualNovelCard;
