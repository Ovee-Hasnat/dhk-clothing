import React, { useState, useContext } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import CartIcon from "./shopping-cart/shopping-cart";
import CartDropdown from "../Cart-dropdown/cart-dropdown";

function Navigation(props) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <div className="mb-3">
      <Navbar dark color="dark" expand="md">
        <NavbarBrand href="/" className="me-auto">
          DHK Clothing
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={collapsed} navbar>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <Link to="/shop" className="nav-link">
                Shop
              </Link>
            </NavItem>
            <NavItem>
              {currentUser ? (
                <Link className="nav-link" onClick={signOutUser}>
                  Sign Out
                </Link>
              ) : (
                <Link to="/sign-in" className="nav-link">
                  Sign In
                </Link>
              )}
            </NavItem>
            <NavItem>
              <CartIcon />
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      {isCartOpen && <CartDropdown />}
    </div>
  );
}

export default Navigation;
