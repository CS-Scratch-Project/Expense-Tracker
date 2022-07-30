import React from 'react';
import { render } from 'react-dom'; //replaced by
// import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import styles from '../stylesheets/styles.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Archived from './containers/Archived.jsx';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom'
// import { createStore } from 'redux';
// import reducer from './redux/assetReducers'
// const store = createStore(reducer);
import store from './redux/store';

// render(
//   <Provider store={store}>
//     <Router>
//       <Routes>
//         <Route exact path="/" element={<App />} />
//         <Route exact path="/archive" element={<Archived />} />
//       </Routes>
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// );

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="/archive" element={<Archived />} />
      </Routes>
    </Router>
  </Provider>
)
ReactDOM.render(<Root store={store} />,
document.getElementById('root'))