import React from 'react';

export function Home() {
  return (
    <div className="flex w-full items-center justify-center h-screen bg-blue-100">
      <div className="flex flex-col justify-center w-8/12 px-10 py-10 bg-white rounded-lg shadow-2xl">
        <h5 className=" text-[#504e63] font-bold  text-center">Homepage</h5>
        <p className="text-[#504e63] m-3 text-center">Content goes here.</p>
      </div>
    </div>
  );
}
