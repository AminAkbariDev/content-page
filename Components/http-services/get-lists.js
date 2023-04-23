import { http } from "./http";
export const getList = () => {
  return http.get("list_api/items/");
};
