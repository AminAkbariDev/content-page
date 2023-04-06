import axios from "axios";
axios.defaults.baseURL = "http://ecommerce.web97.ir/";
axios.defaults.headers.common[
  "Authorization"
] = `Token 75f5178bc022109281bf6c236cc28fb869f3e233`;

export const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  patch: axios.patch,
};
