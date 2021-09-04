import React, { useState, useEffect, useCallback, useRef } from "react";
import DropdownFilter from "../components/filters/DropdownFIlter";
import SearchFilter from "../components/filters/SearchFilter";
import VisualNovelCard from "../components/cards/VisualNovelCard";
import { VnData } from "../vndb/VndbTypes";
import VisualNovelCardList from "../components/cards/VisualNovelCardList";
import { fetchVnList } from "../vndb/Vndb";
import { Service } from "../fetch/Service";
import useVisualNovelSearch from "../hooks/useVisualNovelSearch";
import * as VNDBHelper from "../vndb/VndbHelpers";

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
            label="Theme"
            items={VNDBHelper.FILTER_MAIN_THEME_TAGS_ITEMS()}
            multiSelect={true}
          />
          <DropdownFilter
            label="Languages"
            items={VNDBHelper.FILTER_LANGUAGE_ITEMS()}
            multiSelect={true}
          />
          <DropdownFilter
            label="Released"
            items={VNDBHelper.FILTER_RELEASED_YEARS}
            multiSelect={false}
          />
          <DropdownFilter
            label="Platforms"
            items={VNDBHelper.FILTER_PLATFORM_ITEMS()}
            multiSelect={true}
          />
        </div>
        <VisualNovelCardList />
      </div>
    </div>
  );
};

export default BrowseVisualNovelsPage;
