import React from 'react';

function MobileNavBar(children) {
  return (
    <div className="sticky top-0 bg-white border-b border-gray-200 z-30">
      {children}
    </div>
  );
}

export default MobileNavBar;
