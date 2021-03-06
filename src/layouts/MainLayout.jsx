import React, { useState } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { routes } from './routes';
import Sidebar from '../components/Sidebar';
import FairviewLogo from '../assets/FairviewLogo';

const ContainerGrid = styled.div`
  display: grid;
  grid-template-rows: 50px 0 auto;
  grid-template-columns: 100vw;
  grid-template-areas:
    'header'
    'navlist'
    'main';

  @media (min-width: 551px) {
    grid-template-columns: 288px auto;
    grid-template-areas:
      'header main'
      'navlist main';
  }
`;

const MobileHeader = styled.header`
  grid-area: header;
  padding: 0.25rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  @media (min-width: 551px) {
    position: fixed;
  }
`;
const NavList = styled.nav`
  background: transparent;
  grid-area: navlist;
  padding: 0.25rem;

  @media (min-width: 551px) {
    position: fixed;
    top: 100px;
  }
`;
const Main = styled.main`
  grid-area: main;
  padding: 0.25rem;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

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
      <MobileHeader>
        <NavLink to="/" className="z-50 w-12 sm:w-32 sm:ml-6">
          <FairviewLogo />
        </NavLink>

        <NavToggleButton
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </MobileHeader>
      <NavList>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </NavList>

      <Main>
        <Switch>{getRoutes}</Switch>
      </Main>
    </ContainerGrid>
  );
}

function NavToggleButton({ sidebarOpen, setSidebarOpen }) {
  return (
    <button
      type="button"
      className="text-gray-500 w-12 hover:text-gray-600 md:hidden z-50 sm:hidden"
      aria-controls="sidebar"
      aria-expanded={sidebarOpen}
      onClick={() => setSidebarOpen(!sidebarOpen)}
    >
      <span className="sr-only">Open sidebar</span>
      <svg
        className="w-7 h-7 fill-current"
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
