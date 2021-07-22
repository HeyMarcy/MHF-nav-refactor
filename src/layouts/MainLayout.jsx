import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from './routes';
import NavList from '../components/NavList';

function useMedia(query, initialState = false) {
  const [state, setState] = React.useState(initialState);
  React.useDebugValue(`\`${query}\` => ${state}`);

  React.useEffect(() => {
    let mounted = true;
    const mql = window.matchMedia(query);
    function onChange() {
      if (!mounted) {
        return;
      }
      setState(Boolean(mql.matches));
    }

    mql.addListener(onChange);
    setState(mql.matches);

    return () => {
      mounted = false;
      mql.removeListener(onChange);
    };
  }, [query]);

  return state;
}

const isDesktopView = () => useMedia('(min-width: 700px)');

const ToggleContext = React.createContext();
ToggleContext.displayName = 'ToggleContext';

function Toggle({ children }) {
  const [on, setOn] = React.useState(false);
  const toggle = () => setOn(!on);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

function useToggle() {
  return React.useContext(ToggleContext);
}

function ToggleOn({ children }) {
  const { on } = useToggle();
  return on ? children : null;
}

function ToggleOff({ children }) {
  const { on } = useToggle();
  return on ? null : children;
}

function ToggleButton({ children, ...props }) {
  const { on, toggle } = useToggle();
  return (
    <button type="button" on={on} onClick={toggle} {...props}>
      {children}
    </button>
  );
}

export function MainLayout() {
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
    <div>
      <Toggle>
        <ToggleOn>
          <div>
            <ToggleButton>X</ToggleButton>
          </div>
          <NavList />
        </ToggleOn>
        <div className="relative overflow-y-auto overflow-x-hidden w-screen bg-red-200">
          <ToggleOff>
            <div className="sticky top-0 bg-white border-b border-gray-200 z-30">
              <ToggleButton>menu</ToggleButton>
            </div>
            <Switch>{getRoutes}</Switch>
          </ToggleOff>
        </div>
      </Toggle>
    </div>
  );
}
