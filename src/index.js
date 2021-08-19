import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import { MainLayout } from './layouts/MainLayout';
import './css/main.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <Layout /> */}
      <MainLayout />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
