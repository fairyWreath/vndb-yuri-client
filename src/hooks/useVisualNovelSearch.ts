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
    setVns([]);
    setResult({ status: "loadingMore", payload: [] });

    let controller = new AbortController();
    const signal = controller.signal;

    // reset all pagination stuff
    query.last_sort_value = undefined;
    query.last_sort_vid = undefined;

    const typingTimeout = setTimeout(() => {
      vnSearch(query, signal)
        .then((items: VnSearchItem[]) => {
          setResult({
            status: "loaded",
            payload: items,
            hasMore: items.length > 0,
          });
          setVns(items);
        })
        .catch((err) => {
          if (err.name !== "AbortError") {
            setResult({ status: "error", error: err });
          } else {
            console.log("FETCH abort request");
          }
        });
    }, 500);

    return () => {
      clearTimeout(typingTimeout);
      controller.abort();
    };
  }, [query.search, query.sort_by, query.sort_order, query.nsfw]);

  useEffect(() => {
    // set current vns
    setResult({ status: "loadingMore", payload: vns });

    vnSearch(query)
      .then((items: VnSearchItem[]) => {
        const newVns = [...vns, ...items];
        setResult({
          status: "loaded",
          payload: newVns,
          hasMore: items.length > 0,
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
