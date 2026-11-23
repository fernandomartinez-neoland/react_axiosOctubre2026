import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { Link, Outlet } from "react-router";

function App() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/userlist">User List</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet></Outlet>
    </>
  );
}

export default App;
