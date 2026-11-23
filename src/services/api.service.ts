import axios from "./axios.service";
import { useNavigate } from "react-router";



export async function registerService(data: {}) {
  let body = JSON.stringify(data);
  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/api/user/register",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
  };
  axios
    .request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function loginService(data: {}) {
  data = JSON.stringify(data);

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "http://localhost:3000/api/user/login",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(response.data);
      localStorage.setItem("token", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

export async function userList() {
  let data = {
    rol: "admin",
  };
  try {
    const lista = await axios.post("/user/getallusers", data);
    return lista?.data;
  } catch (e) {
    console.log(e);
   
    throw new Error("largate");
  }
}
