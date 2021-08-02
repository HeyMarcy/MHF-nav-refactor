import React, { useState } from 'react';
import styled from 'styled-components';

import { Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import Sidebar from '../components/Sidebar';
import FairviewLogo from '../assets/FairviewLogo';

const ContainerGrid = styled.div`
  display: grid;
  grid-template-rows: 50px auto;
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
const LogoContainer = styled.header`
  width: 50px;
  z-index: 50;
  @media (min-width: 551px) {
    width: 100px;
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
  background: lightgreen;
  grid-area: navlist;
  padding: 0.25rem;
  position: absolute;
  @media (min-width: 551px) {
    position: fixed;
    top: 100px;
  }
`;
const Main = styled.main`
  grid-area: main;
  padding: 0.25rem;
  display: flex;
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
        <LogoContainer>
          <FairviewLogo />
        </LogoContainer>

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
