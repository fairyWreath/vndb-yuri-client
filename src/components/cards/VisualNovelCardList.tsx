import React from "react";
import VisualNovelCard from "./VisualNovelCard";
import { VnData } from "../../vndb/VndbTypes";

interface VisualNovelCardListProps {
  vns: VnData[];
}

const VisualNovelCardList = (props: VisualNovelCardListProps) => {
  const cardList = props.vns.map((vn, id) => {
    return <VisualNovelCard vn={vn} key={id} />;
  });
  return (
    <div className="grid grid-cols-normalScreen gap-y-2 justify-between">
      {cardList}
    </div>
  );
};

export default VisualNovelCardList;
