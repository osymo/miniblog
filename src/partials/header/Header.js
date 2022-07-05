import React from "react";
import { Link } from "react-router-dom";

import './Header.css'

export function Header() {
  return (

      <header>
        <div>
          <span>Je suis le Logo</span>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/signin">Signin</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/users">Deconnexion</Link>
            </li>
          </ul>
        </nav>
      </header>
  );
}
