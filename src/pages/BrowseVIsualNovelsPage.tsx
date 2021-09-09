import { useState, useCallback, useRef } from "react";

import DropdownFilter from "../components/filters/DropdownFilter";
import SearchFilter from "../components/filters/SearchFilter";
import VisualNovelCardList from "../components/cards/VisualNovelCardList";
import useVisualNovelSearch from "../hooks/useVisualNovelSearch";
import SecondaryFilters from "../components/filters/SecondaryFilters";

import * as VNDBHelper from "../vndb/VndbHelpers";
import { VnSearchQuery } from "../vndb/VnTypes";
import {
  getSortByQuery,
  getSortOrderQuery,
  getTagIdsFromNames,
} from "../vndb/VndbHelpers";

const BrowseVisualNovelsPage = () => {
  const [search, setSearch] = useState<string | undefined>(undefined);
  const [lastSortvalue, setLastSortValue] = useState<Number | undefined>(
    undefined
  );
  const [lastSortVid, setLastSortVid] = useState<string | undefined>(undefined);
  const [NSFW, setNSFW] = useState(false);
  const [sortBy, setSortBy] = useState("popularity");
  const [sortOrderDesc, setSortOrderDesc] = useState(true);
  const [tags, setTags] = useState<string[]>([]);
  const [released, setReleased] = useState<number | undefined>(undefined);

  const listParams: VnSearchQuery = {
    tags: tags,
    sort_by: getSortByQuery(sortBy),
    sort_order: getSortOrderQuery(sortOrderDesc),
    search: search,
    results: 20,
    last_sort_value: lastSortvalue,
    last_sort_vid: lastSortVid,
    nsfw: NSFW,
    released: released,
  };

  const result = useVisualNovelSearch(listParams);

  const observer = useRef<IntersectionObserver>();
  const lastItemRef = useCallback(
    (node) => {
      if (result.status !== "loaded") return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (result.payload.length > 0 && result.hasMore === true) {
            const lastItem = result.payload[result.payload.length - 1];
            let value;

            if (listParams.sort_by === "popularity") {
              value = lastItem.popularity;
            } else if (listParams.sort_by === "rating") {
              value = lastItem.rating;
            } else if (listParams.sort_by === "max_released") {
              value = lastItem.max_released;
            } else if (listParams.sort_by === "min_released") {
              value = lastItem.min_released;
            } else {
              value = lastItem.popularity;
            }

            setLastSortVid(lastItem.id);
            setLastSortValue(value);
          }
        }
      });
      if (node) observer.current.observe(node);
    },
    [result, listParams.sort_by]
  );

  return (
    <div
      className="bg-light w-full min-h-screen bottom-0 px-12
    py-4 font-overlock"
    >
      <div className="max-w-7xl m-auto">
        <div className="flex flex-row justify-between items-center">
          <SearchFilter
            setSearch={(str: string) => {
              setSearch(str);

              // cant put it here to prevent race conditions with the pagination useeffect
              // setLastSortValue(undefined);
              // setLastSortVid(undefined);
            }}
          />
          <DropdownFilter
            label="Theme"
            items={VNDBHelper.FILTER_MAIN_THEME_TAGS_ITEMS()}
            setItems={(names) => {
              setTags(getTagIdsFromNames(names));
            }}
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
            // setItems={(items) => setReleased(items[items.length - 1])}
            setItems={setReleased}
            multiSelect={false}
          />
          <DropdownFilter
            label="Platforms"
            items={VNDBHelper.FILTER_PLATFORM_ITEMS()}
            multiSelect={true}
          />
        </div>
        <div className="flex flex-row justify-end items-center mb-4">
          {/* <SecondaryFilters /> */}
          <SecondaryFilters
            setSortBy={setSortBy}
            setSortOrder={setSortOrderDesc}
            setNSFW={setNSFW}
          />
        </div>
        <VisualNovelCardList data={result} />
        <div className="w-full h-1" ref={lastItemRef}></div>
      </div>
    </div>
  );
};

export default BrowseVisualNovelsPage;
