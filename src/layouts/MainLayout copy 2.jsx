import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import MobileHeader from '../components/MobileHeader';
import Sidebar from '../components/Sidebar';
import Logo from '../components/Logo';

// const LARGEBREAKPOINT = 620;

// const viewportContext = React.createContext({});

// const ViewportProvider = ({ children }) => {
//   const [width, setWidth] = React.useState(window.innerWidth);
//   const [height, setHeight] = React.useState(window.innerHeight);
//   const handleWindowResize = () => {
//     setWidth(window.innerWidth);
//     setHeight(window.innerHeight);
//   };

//   React.useEffect(() => {
//     window.addEventListener('resize', handleWindowResize);
//     return () => window.removeEventListener('resize', handleWindowResize);
//   }, []);
//   return (
//     <viewportContext.Provider value={{ width, height }}>
//       {children}
//     </viewportContext.Provider>
//   );
// };

// const useViewport = () => {
//   const { width, height } = React.useContext(viewportContext);
//   return { width, height };
// };

// const MobileHeader = () => (
//   <div className="sticky top-0 bg-white border-b border-gray-200 z-30 ">
//     <button type="button">menu</button>
//   </div>
// );

export function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const getRoutes = routes.map(prop => {
    return (
      <Route
        exact
        path={prop.path}
        render={() => <prop.component />}
        key={prop.key}
      />
    );
  });
  return (
    <div className="relative flex flex-col md:flex-row">
      <div>
        {/* Hamburger button */}
        {/* <button
          type="button"
          className="text-gray-500 hover:text-gray-600 absolute top-3 right-3 z-50 md:hidden"
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <span className="sr-only">toggle sidebar</span>
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="4" y="5" width="24" height="2" />
            <rect x="4" y="11" width="24" height="2" />
            <rect x="4" y="17" width="24" height="2" />
          </svg>
        </button> */}
        <Logo />
        <div className=" static block md:hidden">
          <MobileHeader
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        </div>
      </div>
      <div className="flex w-full relative">
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Switch>{getRoutes}</Switch>
      </div>
    </div>
  );
}
