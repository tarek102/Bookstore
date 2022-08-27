import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosPerson } from 'react-icons/io';

const Navbar = () => (
  <div className="navbar">
    <nav>
      <ul>
        <li><h2 className="logo">Bookstore CMS</h2></li>
        <li><Link to="/">Books</Link></li>
        <li className="category"><Link to="/categories">Categories</Link></li>
        <li className="user-img"><IoIosPerson /></li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
