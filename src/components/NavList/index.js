import React from 'react';

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
    >
      {navItems.map(item => (
        <li key={item}>
          <h3>{item}</h3>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
