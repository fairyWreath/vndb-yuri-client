import VisualNovelCard from "./VisualNovelCard";
import VisualNovelCardSkeleton from "./VisualNovelCardSkeleton";

import { VnSearchItem } from "../../vndb/VnTypes";

import { Service } from "../../fetch/Service";

import LoadingIcon from "../status/LoadingIcon";
import ErrorIcon from "../status/ErrorIcon";

interface VisualNovelCardListProps {
  data: Service<VnSearchItem[]>;
}

const VisualNovelCardList = (props: VisualNovelCardListProps) => {
  if (props.data.status === "init" || props.data.status === "loading")
    return <LoadingIcon />;
  if (props.data.status === "error") return <ErrorIcon />;

  const cardList = props.data.payload.map((vn) => {
    return <VisualNovelCard vn={vn} key={vn.id} />;
  });

  return (
    <>
      <div className="grid grid-cols-normalScreen gap-y-2 justify-between ">
        {cardList}
        {props.data.status === "loadingMore" && (
          <>
            <VisualNovelCardSkeleton />
            <VisualNovelCardSkeleton />
            <VisualNovelCardSkeleton />
            <VisualNovelCardSkeleton />
            <VisualNovelCardSkeleton />
          </>
        )}
      </div>
    </>
  );
};

export default VisualNovelCardList;
