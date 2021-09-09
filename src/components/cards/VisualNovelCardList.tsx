import VisualNovelCard from "./VisualNovelCard";
import VisualNovelCardSkeleton from "./VisualNovelCardSkeleton";

import { VnSearchItem } from "../../vndb/VnTypes";

import { Service } from "../../fetch/Service";

interface VisualNovelCardListProps {
  data: Service<VnSearchItem[]>;
}

const VisualNovelCardList = (props: VisualNovelCardListProps) => {
  if (props.data.status === "init") return <div>init</div>;
  if (props.data.status === "error") {
    console.log(props.data.error);
    return (
      <div className="flex flex-col justify-start items-center bg-light min-h-screen py-16">
        error
        {/* {props.data.error} */}
      </div>
    );
  }
  if (props.data.status === "loading")
    return (
      <div className="flex flex-col justify-start items-center bg-light min-h-screen">
        loading
      </div>
    );

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
