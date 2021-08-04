import React, { useState } from 'react';
import styled from 'styled-components';

import { Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import Sidebar from '../components/Sidebar';
import Logo from '../components/Logo';
import FairviewLogo from '../assets/FairviewLogo';

const ContainerGrid = styled.div`
  display: grid;
  text-align: center;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  grid-template-columns: 150px auto;
  grid-template-rows: 100px auto;
  grid-template-areas:
    'logo nav'
    'main main';
  color: white;
  @media (min-width: 551px) {
    display: block;
  }
`;
const LogoContainer = styled.header`
  grid-area: logo;
  width: 100px;
  z-index: 60px;
  @media (min-width: 551px) {
    position: absolute;
  }
`;

const MobileHeaderContainer = styled.header`
  background: #a6b8b9;
  grid-area: nav;
  padding: 0.25rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  background-color: white;
  @media (min-width: 551px) {
    display none;
  }
`;

const Main = styled.main`
  background: #1f2128;
  color: white;
  grid-area: main;
  padding: 0.25rem;
  display: flex;
`;
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
    <ContainerGrid>
      <LogoContainer>
        <FairviewLogo />
      </LogoContainer>
      <MobileHeaderContainer>
        <MobileHeader
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </MobileHeaderContainer>
      <Main>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <Switch>{getRoutes}</Switch>
      </Main>
    </ContainerGrid>
  );
}

function MobileHeader({ sidebarOpen, setSidebarOpen }) {
  return (
    <button
      type="button"
      className="text-gray-500 hover:text-gray-600 lg:hidden z-50"
      aria-controls="sidebar"
      aria-expanded={sidebarOpen}
      onClick={() => setSidebarOpen(!sidebarOpen)}
    >
      <span className="sr-only">Open sidebar</span>
      <svg
        className="w-6 h-6 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="4" y="5" width="16" height="2" />
        <rect x="4" y="11" width="16" height="2" />
        <rect x="4" y="17" width="16" height="2" />
      </svg>
    </button>
  );
}
