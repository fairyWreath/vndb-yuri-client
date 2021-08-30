import { VisualNovel } from "./VndbTypes";

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
    data?: VisualNovel;
    errors?: Array<{ message: string }>;
  };

  const { data, errors }: JSONResponse = await response.json();

  if (response.ok) {
    const vn = data;
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
