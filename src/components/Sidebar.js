import React, { useEffect, useRef } from 'react';
import NavList from './NavList';

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const trigger = useRef(null);
  const sidebar = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className="lg:w-72 sm:mt-12">
      {/* Sidebar backdrop */}
      <div
        className={`absolute inset-0 bg-white bg-opacity-100 z-40 md:hidden md:z-auto transition-opacity duration-200 ${
          sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />
      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`absolute z-40 left-0 top-0 md:static md:left-auto md:top-auto md:translate-x-0 transform h-screen overflow-y-auto md:overflow-y-auto no-scrollbar w-72 flex-shrink-0 bg-white p-4 transition-transform duration-200 ease-in-out ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-72'
        }`}
      >
        <NavList />
      </div>
    </div>
  );
}

export default Sidebar;
