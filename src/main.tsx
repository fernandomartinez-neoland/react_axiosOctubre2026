import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Login } from "./components/login.component.tsx";
import { Register } from "./components/register.component.tsx";
import { UserList } from "./components/userList.component.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
      { path: "/userlist", Component: UserList },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}/>
    
  </StrictMode>,
);
