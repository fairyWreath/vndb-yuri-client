import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { VnSearchItem } from "../../vndb/VnTypes";
import * as VNDBHelper from "../../vndb/VndbHelpers";

interface VisualNovelCardProps {
  vn: VnSearchItem;
  popupLoc: string;
}

const VisualNovelCard = (props: VisualNovelCardProps) => {
  const [expand, setExpand] = useState(false);

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
      {expand && (
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          className={`hidden lg:block w-72 p-5 bg-accentSecondary absolute z-30 top-5 text-sm
          rounded-md shadow-md ${props.popupLoc}`}
        >
          <div className="flex justify-between">
            <div className="title text-darkAccent mb-2 text-base italic">
              <span className="text-base not-italic text-dark">
                Developer: {""}
              </span>
              {props.vn.producers[props.vn.producers.length - 1]}
            </div>
            <div className="score text-green-500 text-base">
              {props.vn.rating / 100}
            </div>
          </div>
          <div className="text-primary mb-1">
            {VNDBHelper.parseDate(props.vn.released)}
          </div>
          <div className="info text-dark mb-2">{props.vn.length}</div>
          <div className="flex mb-2">
            {props.vn.languages.slice(0, 3).map((lang, index) => (
              <div
                className="bg-primary text-light text-sm px-2 rounded-lg mr-1"
                key={index}
              >
                {VNDBHelper.getFullLanguageName(lang.trim())}
              </div>
            ))}
          </div>
          <div className="flex">
            {props.vn.platforms.slice(0, 3).map((plat, index) => (
              <div
                className="bg-dark text-light text-sm px-2 rounded-lg mr-1"
                key={index}
              >
                {VNDBHelper.getFullPlatformName(plat.trim())}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default VisualNovelCard;
