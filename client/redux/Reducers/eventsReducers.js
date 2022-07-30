import * as types from '../actions/actionTypes'

const defaultState = [
];

const transactionsReducer = (state = initialState, action) => {

  switch (action.type) {
    case types.editEvent: {
      //do some stuff
      return {
        ...state,
      }
    };
    case types.deleteEvent: {
      //do some stuff
      return {
        ...state,
      };
    }
    case types.completeEvent: {
        //do some stuff
        return {
          ...state,
      };
    };
    default: {
      return state;
    }
  }
};

export default transactionsReducer;