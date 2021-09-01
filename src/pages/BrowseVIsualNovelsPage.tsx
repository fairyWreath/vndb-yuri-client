import React, { useState, useEffect, useCallback, useRef } from "react";
import DropdownFilter from "../components/filters/DropdownFIlter";
import SearchFilter from "../components/filters/SearchFilter";
import VisualNovelCard from "../components/cards/VisualNovelCard";
import { VnData } from "../vndb/VndbTypes";
import VisualNovelCardList from "../components/cards/VisualNovelCardList";
import { fetchVnList } from "../vndb/Vndb";
import { Service } from "../fetch/Service";
import useVisualNovelSearch from "../hooks/useVisualNovelSearch";

const BrowseVisualNovelsPage = () => {
  return (
    <div
      className="bg-light w-full min-h-screen bottom-0 px-12
    py-4 font-overlock"
    >
      <div className="max-w-7xl m-auto">
        <div className="flex flex-row justify-between items-center mb-6">
          <SearchFilter />
          <DropdownFilter
            label="Tags"
            items={["test1", "test2"]}
            multiSelect={true}
          />
          <DropdownFilter label="Languages" items={[]} multiSelect={true} />
          <DropdownFilter label="Released" items={[]} multiSelect={false} />
          <DropdownFilter label="Platforms" items={[]} multiSelect={true} />
        </div>
        <VisualNovelCardList />
      </div>
    </div>
  );
};

export default BrowseVisualNovelsPage;
