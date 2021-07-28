import React from 'react';
import MobileNavBar from './MobileNavBar';
// import { Switch, Route } from 'react-router-dom';
// import { routes } from './routes';
import NavList from '../components/NavList';

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

function ToggleButton({ children, ...props }) {
  // const { on, toggle } = useToggle();
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}
const MobileComponent = () => (
  <div className="sticky top-0 bg-white border-b border-gray-200 z-30">
    {/* <ToggleButton>X</ToggleButton> */}
    <button type="button">X</button>
  </div>
);
// const DesktopComponent = () => <p>"Wow, your screen is big!"</p>;

const MyComponent = () => {
  const { width } = useViewport();
  const breakpoint = 420;

  return width < breakpoint ? <MobileComponent /> : null;
};

export default function Layout() {
  return (
    <ViewportProvider>
      <div className="relative">
        <MyComponent />
        <NavList />
      </div>
    </ViewportProvider>
  );
}
