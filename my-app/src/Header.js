import React from "react";
import {NavLink} from 'react-router-dom'

function Header() {
    return(
      <header className="headerbackground">
        <nav>
          <div className="navbar">
            <NavLink exact className="button" to="/">
              Home
            </NavLink>
            <NavLink exact className="button" to="/restaurants">
              Movies and Shows
            </NavLink>
            <NavLink exact className="button" to="/restaurants/new">
              Add Film
            </NavLink>
            <NavLink exact className="button" to="/weeksresto">
              Movie of the Week
            </NavLink>
          </div>
        </nav>
      </header>
    );
  }

export default Header;