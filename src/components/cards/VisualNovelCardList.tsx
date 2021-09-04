import React, { useEffect, useState, useRef, useCallback } from "react";
import VisualNovelCard from "./VisualNovelCard";
import VisualNovelCardSkeleton from "./VisualNovelCardSkeleton";
import useVisualNovelSearch from "../../hooks/useVisualNovelSearch";

import { VnSearchQuery, VnSearchItem } from "../../vndb/VnTypes";
import { VndbSearchQuery } from "../../vndb/VndbHelpers";

const VisualNovelCardList = () => {
  const [lastSortvalue, setLastSortValue] = useState<Number | undefined>(
    undefined
  );

  const [lastSortVid, setLastSortVid] = useState<string | undefined>(undefined);

  const listParams = {
    tags: [],
    sort_by: "popularity",
    search: undefined,
    results: 20,
    last_sort_value: lastSortvalue,
    last_sort_vid: lastSortVid,
    nsfw: false,
  };

  const result = useVisualNovelSearch(listParams);

  const observer = useRef<IntersectionObserver>();
  const lastItemRef = useCallback(
    (node) => {
      if (result.status !== "loaded") return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          const lastItem = result.payload[result.payload.length - 1];
          let value;
          if (listParams.sort_by === "popularity") {
            value = lastItem.popularity;
            // } else if (listParams.sort_by === "rating") {
            //   value = lastItem.rating;
          } else if (listParams.sort_by === "max_released") {
            value = lastItem.max_released;
          } else if (listParams.sort_by === "min_released") {
            value = lastItem.min_released;
          } else {
            value = lastItem.max_released;
          }

          setLastSortValue(value);
        }
      });
      if (node) observer.current.observe(node);
    },
    [result]
  );

  if (result.status === "init") return <div>init</div>;
  if (result.status === "error")
    return (
      <div className="flex flex-col justify-start items-center bg-light min-h-screen py-16">
        error
      </div>
    );
  if (result.status === "loading")
    return (
      <div className="flex flex-col justify-start items-center bg-light min-h-screen">
        loading
      </div>
    );

  const cardList = result.payload.map((vn, idx) => {
    return <VisualNovelCard vn={vn} key={vn.id} />;
  });

  return (
    <>
      <div className="grid grid-cols-normalScreen gap-y-2 justify-between ">
        {cardList}
        {result.status === "loadingMore" && (
          <>
            <VisualNovelCardSkeleton />
            <VisualNovelCardSkeleton />
            <VisualNovelCardSkeleton />
            <VisualNovelCardSkeleton />
            <VisualNovelCardSkeleton />
          </>
        )}
      </div>
      <div className="w-full h-1" ref={lastItemRef}></div>
    </>
  );
};

export default VisualNovelCardList;
