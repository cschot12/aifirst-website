import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from './ui/button';

const Header = () => {
  const activeLinkStyle = {
    textDecoration: 'underline',
  };

  return (
    <header className="bg-gray-100 dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          AI-First
        </Link>
        <div className="space-x-4">
          <NavLink 
            to="/" 
            style={({ isActive }) => isActive ? activeLinkStyle : undefined}
            className="text-lg hover:underline"
          >
            Home
          </NavLink>
          <NavLink 
            to="/blog" 
            style={({ isActive }) => isActive ? activeLinkStyle : undefined}
            className="text-lg hover:underline"
          >
            Blog
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
