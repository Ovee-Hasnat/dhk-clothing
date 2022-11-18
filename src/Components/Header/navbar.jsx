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
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

function Navigation(props) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const { currentUser } = useContext(UserContext);

  return (
    <div className="mb-3">
      <Navbar
        dark
        color="dark"
        expand="md"
        sticky="top"
      >
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
              <Link to="/components/" className="nav-link">
                Components
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;
