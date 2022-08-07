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
            <NavLink exact className="button" to="/shows">
              Movie List
            </NavLink>
            <NavLink exact className="button" to="/shows/new">
              Add a Movie
            </NavLink>
            <NavLink exact className="button" to="/users">
              Login
            </NavLink>
          </div>
        </nav>
      </header>
    );
  }

export default Header;