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

  const cardList = props.data.payload.map((vn, idx) => {
    let right = true;
    if (idx % 5 > 2) right = false;
    return <VisualNovelCard vn={vn} PopRight={right} key={vn.id} />;
  });

  return (
    <>
      <div
        className="grid relative justify-items-center lg1s:grid-cols-fill-125 grid-cols-5   
  xs:gap-x-2 sm:gap-x-4 gap-x-8 sm:gap-y-4 md:gap-y-6 lg1s:gap-y-7 gap-y-9"
      >
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
