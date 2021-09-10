import { useEffect, useState } from "react";
import { Service } from "../fetch/Service";
import { vnSearch } from "../vndb/Vndb";
import { VnSearchItem, VnSearchQuery } from "../vndb/VnTypes";

const useVisualNovelSearch = (query: VnSearchQuery) => {
  const [result, setResult] = useState<Service<VnSearchItem[]>>({
    status: "loading",
  });

  const [vns, setVns] = useState<VnSearchItem[]>([]);

  useEffect(() => {
    setResult({ status: "loadingMore", payload: [] });

    let controller = new AbortController();
    const signal = controller.signal;

    // for now, some ugly code to prevent cycle, use another object, if reset like below will cause
    // the pagination useeffect to trigger
    const searchQuery = query;
    searchQuery.last_sort_value = undefined;
    searchQuery.last_sort_vid = undefined;

    // reset all pagination stuff, will cause timing problems with the other useeffect
    // query.last_sort_value = undefined;
    // query.last_sort_vid = undefined;

    const typingTimeout = setTimeout(() => {
      vnSearch(searchQuery, signal)
        .then((items: VnSearchItem[]) => {
          setResult({
            status: "loaded",
            payload: items,
            hasMore: items.length >= 20, // 20 is the max result per page, use it as magic number for now
          });
          setVns(items);
        })
        .catch((err) => {
          if (err.name !== "AbortError") {
            setResult({ status: "error", error: err });
          }
        });
    }, 500);

    return () => {
      clearTimeout(typingTimeout);
      controller.abort();
    };
  }, [
    query.search,
    query.sort_by,
    query.sort_order,
    query.nsfw,
    query.tags,
    query.released,
  ]);

  useEffect(() => {
    // set current vns
    setResult({ status: "loadingMore", payload: vns });

    vnSearch(query)
      .then((items: VnSearchItem[]) => {
        const newVns = [...vns, ...items];
        setResult({
          status: "loaded",
          payload: newVns,
          hasMore: items.length > 0 && items.length >= 20, // 20 is the max result per page, use it as magic number for now
        });
        setVns(newVns);
      })
      .catch((err) => {
        setResult({ status: "error", error: err });
      });
  }, [query.last_sort_value]);

  return result;
};

export default useVisualNovelSearch;
