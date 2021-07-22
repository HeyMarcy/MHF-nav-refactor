import React from 'react';

export function Section({ isNavShowing, title, children }) {
  return (
    <div className={`p-4 w-full ${isNavShowing ? 'ml-[110px]' : 'ml-[40px]'} `}>
      <h2 className="font-bold text-gray-500">{title}</h2>
      <hr className="mb-4" />
      {children}
    </div>
  );
}
