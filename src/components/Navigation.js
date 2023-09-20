import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

export default function Navigation() {
    return (
        <nav className="navi-bar">
            <ul className="navi-list">
                <li className="navi-bar-link">
                    <Link to={{ pathname: "/" }}>Shop</Link>
                </li>
                <li className="navi-bar-link">
                    <a href="/login">Login</a>
                </li>
                <li className="navi-bar-link">
                    <a href="/about">About Us</a>
                </li>
                <li>
                    <CartIcon />
                </li>
            </ul>
        </nav >
    )
}