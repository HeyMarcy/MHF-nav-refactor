import React from 'react';

function MobileHeader({ sidebarOpen, setSidebarOpen }) {
  return (
    <div className="flex justify-end bg-white">
      <button
        type="button"
        className="text-gray-500 hover:text-gray-600 md:hidden z-50"
        aria-controls="sidebar"
        aria-expanded={sidebarOpen}
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-8 h-8 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="4" y="5" width="16" height="2" />
          <rect x="4" y="11" width="16" height="2" />
          <rect x="4" y="17" width="16" height="2" />
        </svg>
      </button>
    </div>
  );
}

export default MobileHeader;
