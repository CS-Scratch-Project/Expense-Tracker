//this is where we will combine oure reducers
//then export them
import { combineReducers } from 'redux';
import assetsReducer from './assetsReducer.js';


const allReducers = combineReducers({
 assets: assetsReducer,
})


export default allReducers;
