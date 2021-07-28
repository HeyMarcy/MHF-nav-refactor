import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import NavList from '../components/NavList';

const LARGEBREAKPOINT = 620;

const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);
  console.log('width: ', width);
  console.log('height: ', height);
  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

const MobileComponent = () => (
  <div className="sticky top-0 bg-white border-b border-gray-200 z-30 ">
    <button type="button">menu</button>
  </div>
);

// const DisplayHeaderInMobile = () => {
//   const { width } = useViewport();

//   return width < LARGEBREAKPOINT ? <MobileComponent /> : null;
// };

export function MainLayout() {
  const [displayMenu] = React.useState(false);
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
    <ViewportProvider>
      <div className="relative">
        <div className="block sm:hidden">
          <MobileComponent />
        </div>
        <NavList displayMenu={displayMenu} />
        <Switch>{getRoutes}</Switch>
      </div>
    </ViewportProvider>
  );
}
