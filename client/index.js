import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';
import styles from '../stylesheets/styles.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Archived from './containers/Archived.jsx';

render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/archive" element={<Archived />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
