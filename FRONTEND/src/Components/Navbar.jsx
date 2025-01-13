import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img className="text-2xl font-bold" src = "https://www.lemontreehotels.com/assets/front/images/logo.png"></img>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/" className="hover:underline">Hotels</Link>
          </li>
          <li>
            <Link to="/" className="hover:underline">Offers & Promotions</Link>
          </li>
          <li>
            <Link to="/rewards" className="hover:underline">Rewards</Link>
          </li>
          <li>
            <Link to="/our-brands" className="hover:underline">Our Brands</Link>
          </li>
          <li>
            <Link to="/sustainability" className="hover:underline">Sustainability</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
