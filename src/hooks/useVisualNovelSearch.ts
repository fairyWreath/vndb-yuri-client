import React, { useEffect, useState } from "react";
import { fetchVnList } from "../vndb/Vndb";
import { Service } from "../fetch/Service";
import { VndbSearchQuery } from "../vndb/VndbHelpers";
import { VnData } from "../vndb/VndbTypes";

const useVisualNovelSearch = (query: VndbSearchQuery) => {
  const [result, setResult] = useState<Service<VnData[]>>({
    status: "loading",
  });

  const [vns, setVns] = useState<VnData[]>([]);

  useEffect(() => {
    setVns([]);
  }, [query.search]);

  useEffect(() => {
    setResult({ status: "loadingMore", payload: vns });

    fetchVnList({ page: query.page })
      .then((items: VnData[]) => {
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
  }, [query.page]);

  return result;
};

export default useVisualNovelSearch;
