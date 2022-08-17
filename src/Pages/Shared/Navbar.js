import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {
 
  const menuItems = (
    <>
      <li>
        <Link to="Home">Home</Link>
      </li>

      <li>
        <Link to="Appointment">Appointment</Link>
      </li>
      <li>
        <Link to="Reviews">Reviews</Link>
      </li>

      <li>
        <Link to="Support">Support</Link>
      </li>
      <li>
        <Link to="About">About</Link>
      </li>

      <li>
        <Link to="Login">Login</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl" >Doctors Portal</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;