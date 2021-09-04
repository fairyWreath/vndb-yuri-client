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

    const typingTimeout = setTimeout(() => {
      vnSearch(query, signal)
        .then((items: VnSearchItem[]) => {
          setResult({
            status: "loaded",
            payload: [...vns, ...items],
            hasMore: items.length > 0,
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
  }, [query.search]);

  useEffect(() => {
    setResult({ status: "loadingMore", payload: [] });

    vnSearch(query)
      .then((items: VnSearchItem[]) => {
        setResult({
          status: "loaded",
          payload: [...vns, ...items],
          hasMore: items.length > 0,
        });
        setVns((prev) => {
          return [...prev, ...items];
        });
      })
      .catch((err) => {
        setResult({ status: "error", error: err });
      });
  }, [query.last_sort_value, query.last_sort_vid]);

  return result;
};

export default useVisualNovelSearch;
