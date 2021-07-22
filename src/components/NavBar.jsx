import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from '@heroicons/react/solid';

export default function NavBar({ handleNavClick, showHideNav }) {
  // const [showHideNav, setShowHideNav] = useState(true);

  const location = useLocation();
  const { pathname } = location;

  const handleLocalNavClick = () => handleNavClick(!showHideNav);
  return (
    <div className="fixed">
      <nav className=" h-[100vh] p-5 px-2 py-4 mr-4 bg-blue-200">
        <div className="flex w-full">
          {showHideNav ? (
            <ChevronDoubleLeftIcon
              onClick={handleLocalNavClick}
              className="w-6 h-6 text-blue-500 bg-[rgba(255,255,255,0.8)] border-2 border-blue-500 rounded "
            />
          ) : (
            <ChevronDoubleRightIcon
              onClick={handleLocalNavClick}
              className="w-6 h-6 text-blue-500 border-2 bg-[rgba(255,255,255,0.8)] border-blue-500 rounded"
            />
          )}
        </div>

        <ul className={`w-full ${!showHideNav && 'hidden'}`}>
          <li className="">
            <Link
              exact
              className={`flex justify-center px-4 py-2 my-4 font-semibold text-center rounded ${
                pathname === '/' ? 'bg-white' : 'bg-blue-300 text-blue-100'
              }`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="text-center">
            <Link
              className={`flex justify-center px-4 py-2 my-4 font-semibold text-center rounded whitespace-nowrap ${
                pathname === '/layout'
                  ? 'bg-white'
                  : 'bg-blue-300 text-blue-100'
              }`}
              to="/layout"
            >
              Layout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
