// import { configureStore } from '@reduxjs/toolkit';
// import reducer from './Reducers/assetReducers';



// export default store;
// // 


import { createStore } from 'redux';
//import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './Reducers/transactionReducers';
//import thunk from 'redux-thunk';
//import { someAction1 } from './actions/actions';

const store = createStore(
  reducers,
  //composeWithDevTools(applyMiddleware(thunk)),
);
//store.dispatch(someAction1());

export default store;
