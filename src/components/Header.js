import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import "./header.css";
import { useSelector } from "react-redux";

export const Header = () => {
  const products = useSelector((state) => state.cartSate.cartList);
  return (
    <header>
      <Link to="/" className="logo">
        <img src={Logo} alt="logo" className="logo" />
        <span>Redux Cart</span>
      </Link>

      <nav className="navigation">
        <NavLink to="/" className="link">
          Home
        </NavLink>

        <NavLink to="/cart" className="link">
          Cart
        </NavLink>
      </nav>

      <Link to="/cart" className="items">
        <span>Cart: {products.length} </span>
      </Link>
    </header>
  );
};
