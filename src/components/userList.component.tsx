import { useEffect, useState } from "react";
import { userList } from "../services/api.service";
import { useNavigate } from "react-router";

export function UserList() {
  const [lista, setLista] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    userList()
      .then((datos) => {
        // console.log(datos);
        setLista(Array.isArray(datos) ? datos : []);
      })
      .catch((error) => {
        navigate("/login", { replace: true });
        console.log(error);
      });
  }, []);

  return (
    <>
      <h1>userList</h1>
      {lista.map((item: any) => (
        <>
          <h2>{item.name}</h2>
          <h2>{item.email}</h2>
          <h2>{item.username}</h2>
          <h2>{item.address}</h2>
          <hr />
        </>
      ))}
    </>
  );
}
