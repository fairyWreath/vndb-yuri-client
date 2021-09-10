import { VnSearchQuery, VnSearchItem, VnDetails } from "./VnTypes";
import queryString from "query-string";
import Config from "../config";

const VN_API_URL = "api/vn";

export async function vnSearch(
  query: VnSearchQuery,
  signal: AbortSignal | undefined = undefined
): Promise<VnSearchItem[]> {
  let url = new URL(`${Config.API_BASE_URL}${VN_API_URL}/search`);
  url.search = queryString.stringify(query);

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
    signal: signal,
  });

  type JSONResponse = {
    items?: VnSearchItem[];
    error: string;
  };

  const { items, error }: JSONResponse = await response.json();
  if (response.ok) {
    const vns = items;
    if (vns) {
      return Object.assign(vns);
    } else {
      return Promise.reject(new Error(`Cannot retrieve search VN list`));
    }
  } else {
    const err = new Error(error ?? "unknown");
    return Promise.reject(err);
  }
}

export async function vnDetails(vid: string): Promise<VnDetails> {
  const response = await fetch(
    `${Config.API_BASE_URL}${VN_API_URL}/details/${vid}`,
    {
      method: "GET",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    }
  );

  type JSONResponse = {
    item?: VnDetails;
    error: string;
  };

  const { item, error }: JSONResponse = await response.json();

  if (response.ok) {
    const vn = item;
    if (vn) {
      return Object.assign(vn);
    } else {
      return Promise.reject(new Error(`No visual id with id ${vid}`));
    }
  } else {
    const err = new Error(error ?? "unknown");
    return Promise.reject(err);
  }
}
