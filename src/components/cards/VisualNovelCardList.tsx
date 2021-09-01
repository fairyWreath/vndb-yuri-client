import React, { useEffect, useState, useRef, useCallback } from "react";
import VisualNovelCard from "./VisualNovelCard";
import VisualNovelCardSkeleton from "./VisualNovelCardSkeleton";
import useVisualNovelSearch from "../../hooks/useVisualNovelSearch";

const VisualNovelCardList = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const result = useVisualNovelSearch({ page: page });

  const observer = useRef<IntersectionObserver>();
  const lastItemRef = useCallback(
    (node) => {
      if (result.status !== "loaded") return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
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
