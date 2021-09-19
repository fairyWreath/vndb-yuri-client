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
    let clear = false;
    if (query.last_sort_value === undefined) clear = true;

    let temp: VnSearchItem[] = [];

    if (!clear) {
      temp = vns;
    }

    setResult({ status: "loadingMore", payload: temp });

    let controller = new AbortController();
    let signal: AbortSignal | undefined = controller.signal;

    if (!clear) signal = undefined;

    let timeout = 500;
    if (!clear) timeout = 0;

    const typingTimeout = setTimeout(() => {
      vnSearch(query, signal)
        .then((items: VnSearchItem[]) => {
          if (!clear) {
            const newVns = [...vns, ...items];
            setResult({
              status: "loaded",
              payload: newVns,
              hasMore: items.length > 0 && items.length >= query.results,
            });
            setVns(newVns);
          } else {
            setResult({
              status: "loaded",
              payload: items,
              hasMore: items.length >= query.results,
            });
            setVns(items);
          }
        })
        .catch((err) => {
          if (err.name !== "AbortError") {
            setResult({ status: "error", error: err });
          }
        });
    }, timeout);

    return () => {
      clearTimeout(typingTimeout);
      if (clear) controller.abort();
    };
  }, [
    query.search,
    query.sort_by,
    query.sort_order,
    query.nsfw,
    query.tags,
    query.released,
    query.languages,
    query.platforms,
    query.results,
    query.last_sort_value,
    query.last_sort_vid,
    // query,
  ]);

  return result;
};

export default useVisualNovelSearch;
