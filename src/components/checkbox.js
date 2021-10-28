import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import logo from '../images/customer-obsession-logo.png';


function MainHeader({logo}) {
  const [isOpen, setOpen] = useState(false);
  const isAuth = !!localStorage.getItem("token");
  return (
    <header className="co-header">
      <div className="menu-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="logo-area text-right">
                <NavLink
                 className="main-btn"
                 activeClassName="is-active"
                 to="/"
                  >
                    <img src={logo} alt="logo" />
                  </NavLink>
                </div>

            </div>
            <div className="col-lg-6 text-left">
              <div className="co-menu-area">
                <ul>
                    <li>
                      <NavLink
                       className="main-btn"
                       activeClassName="is-active"
                       to="/about"
                        >
                        Terms & Conditions
                        </NavLink>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Navbar(){
  return (
    <div className="Navbar">
    <MainHeader  logo={logo} />
    </div>
  );
}
export default withRouter(Navbar);
