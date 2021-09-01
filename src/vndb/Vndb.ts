import { VisualNovel, VnData } from "./VndbTypes";
import { VndbSearchQuery } from "./VndbHelpers";

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
    errors?: Array<{ message: string }>;
  };

  const { item, errors }: JSONResponse = await response.json();

  if (response.ok) {
    const vn = item;
    if (vn) {
      return Object.assign(vn);
    } else {
      return Promise.reject(new Error(`No visual id with id ${vnId}`));
    }
  } else {
    const error = new Error(
      errors?.map((e) => e.message).join("\n") ?? "unknown"
    );
    return Promise.reject(error);
  }
}

export async function fetchVnList(query: VndbSearchQuery): Promise<VnData[]> {
  var url = new URL(`${BASE_URL}${VN_API_URL}/list`);
  const params = {
    page: `${query.page}`,
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
    errors?: Array<{ message: string }>;
  };

  const { items, errors }: JSONResponse = await response.json();
  if (response.ok) {
    const vns = items;
    if (vns) {
      return Object.assign(vns);
    } else {
      return Promise.reject(new Error(`Cannot retrive VN list`));
    }
  } else {
    const error = new Error(
      errors?.map((e) => e.message).join("\n") ?? "unknown"
    );
    return Promise.reject(error);
  }
}
