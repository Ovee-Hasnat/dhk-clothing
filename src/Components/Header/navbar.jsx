// import React, { Component } from "react";
// import {
//   Navbar,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavbarToggler,
//   Collapse,
// } from "reactstrap";
// import { Link } from "react-router-dom";

// class Navigation extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isNavOpen: false,
//     };
//   }

//   navToggle = () => {
//     this.setState({
//       isNavOpen: !this.state.isNavOpen,
//     });
//   };

//   render() {
//     return (
//       <div style={{ marginBottom: "15px" }}>
//         <Navbar dark color="dark" expand="md">
//           <div className="container">
//             <NavbarToggler className="" onClick={this.navToggle} />

//             <NavbarBrand href="/">DHK Clothing</NavbarBrand>
//             <Collapse isOpen={this.state.isNavOpen} navbar>
//               <Nav className="me-auto" navbar>
//                 <NavItem>
//                   <Link to="/" className="nav-link">
//                     Home
//                   </Link>
//                 </NavItem>
//               </Nav>
//             </Collapse>
//           </div>
//         </Navbar>
//       </div>
//     );
//   }
// }

// export default Navigation;

import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from "reactstrap";
import { Link } from "react-router-dom";

function Navigation(props) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="mb-3">
      <Navbar dark color="dark" light expand="md">
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
              <Link to="/sign-in" className="nav-link">
                Sign In
              </Link>
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
