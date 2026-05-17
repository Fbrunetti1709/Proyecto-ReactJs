import logo from "../../assets/logo.png";
import { Nav } from "../Nav/Nav";
import { Link } from "react-router-dom";
import "./Header.css";


import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <Link to={"/"}>
          <img src={logo} />
          {/* <span>Café del Pueblo</span> */}
        </Link>
      </div>
      <Nav />
    </header>
  );
};
