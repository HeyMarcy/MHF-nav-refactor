import React from 'react';
import { Link } from 'react-router-dom';

const NavList = ({ actions, ...props }) => {
  const navItems = [
    'Get Care',
    'Find a Location',
    `Find a Provider`,
    'Search Conditions',
    'Pay a Bill',
    'Sign in to MyChart',
  ];

  return (
    <ul
      style={{
        listStyle: 'none',
        paddingLeft: 20,
        marginTop: 20,
        textAlign: 'left',
      }}
      className="w-full"
    >
      {navItems.map(item => (
        <li key={item}>
          <Link className=" px-1" to="/">
            <h3>{item}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
