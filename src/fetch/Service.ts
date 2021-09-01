interface ServiceInit {
  status: "init";
}
interface ServiceLoading {
  status: "loading";
}

interface ServiceLoadingMore<T> {
  status: "loadingMore";
  payload: T;
}

interface ServiceLoaded<T> {
  status: "loaded";
  payload: T;
  hasMore?: boolean;
}
interface ServiceError {
  status: "error";
  error: string;
}
export type Service<T> =
  | ServiceInit
  | ServiceLoading
  | ServiceLoadingMore<T>
  | ServiceLoaded<T>
  | ServiceError;
