import { VisualNovel, VnData } from "./VndbTypes";
import { VndbSearchQuery } from "./VndbHelpers";

import { VnSearchQuery, VnSearchItem } from "./VnTypes";

import queryString from "query-string";

const BASE_URL = "http://localhost:3000/";
const VN_API_URL = "api/vn";

export async function fetchVnDetails(vnId: string): Promise<VisualNovel> {
  const response = await fetch(`${BASE_URL}${VN_API_URL}/complete/${vnId}`, {
    method: "GET",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });

  type JSONResponse = {
    item?: VisualNovel;
    error: string;
  };

  const { item, error }: JSONResponse = await response.json();

  if (response.ok) {
    const vn = item;
    if (vn) {
      return Object.assign(vn);
    } else {
      return Promise.reject(new Error(`No visual id with id ${vnId}`));
    }
  } else {
    const err = new Error(error ?? "unknown");
    return Promise.reject(err);
  }
}

export async function vnSearch(query: VnSearchQuery): Promise<VnSearchItem[]> {
  var url = new URL(`${BASE_URL}${VN_API_URL}/search`);

  console.log(query.tags);
  url.search = queryString.stringify(query);
  console.log(url.search);
  console.log(url);

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
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

export async function fetchVnList(query: VndbSearchQuery): Promise<VnData[]> {
  var url = new URL(`${BASE_URL}${VN_API_URL}/list`);
  const params = {
    page: `${query.page}`,
    test: "a",
  };
  url.search = new URLSearchParams(params).toString();
  console.log(url.toString());

  const response = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });

  type JSONResponse = {
    items?: VnData[];
    error: string;
  };

  const { items, error }: JSONResponse = await response.json();
  if (response.ok) {
    const vns = items;
    if (vns) {
      return Object.assign(vns);
    } else {
      return Promise.reject(new Error(`Cannot retrive VN list`));
    }
  } else {
    const err = new Error(error ?? "unknown");
    return Promise.reject(err);
  }
}
