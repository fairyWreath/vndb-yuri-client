import React, { useEffect, useState } from "react";
import { fetchVnList } from "../vndb/Vndb";
import { Service } from "../fetch/Service";
import { VndbSearchQuery } from "../vndb/VndbHelpers";
import { VnData } from "../vndb/VndbTypes";

import { vnSearch } from "../vndb/Vndb";
import { VnSearchItem } from "../vndb/VnTypes";
import { VnSearchQuery } from "../vndb/VnTypes";

const useVisualNovelSearch = (query: VnSearchQuery) => {
  const [result, setResult] = useState<Service<VnSearchItem[]>>({
    status: "loading",
  });

  const [vns, setVns] = useState<VnSearchItem[]>([]);

  useEffect(() => {
    setVns([]);
  }, [query.search]);

  useEffect(() => {
    setResult({ status: "loadingMore", payload: vns });

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
  }, [query.last_sort_value, query.search]); // cant put tags here

  return result;
};

export default useVisualNovelSearch;
