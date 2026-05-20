import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContex";
import "./Nav.css";
// import styles from "./Nav.module.css";

export const Nav = () => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();
  return (
    <nav>
      {/* <ul className={styles["nav-list"]}> */}
      <ul className="nav-list">
        {/* <li> <Link to="/home">Home</Link></li> */}
        <li>
          {" "}
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to={"/carrito"}>
            Carrito
            {totalItems > 0 && <span className="Incart">{totalItems}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
};
