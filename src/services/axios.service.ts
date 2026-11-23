import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKURI,
});

instance.interceptors.request.use(function (config): any {
    const token=localStorage.getItem("token")
    config.headers["Authorization"]=`Bearer ${token}`
    // console.log(config)
  return config
});


instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error): any {
    // console.log(error)
    if (error.response?.status(401)) {
      return Promise.reject(error);
    }
  },)
export default instance;
