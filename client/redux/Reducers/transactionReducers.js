import * as types from '../actions/actionTypes'

const defaultState = [
  {
    eventName: 'Coachella',
    eventDescription: "Full first weekend at Coachella with Richard and Will!",
    transactions: [
      {
        name: 'Water',
        date: '06/22/23',
        amount: 40,
        entry: 'Bought everyone water',
        transactionComplete: false,
        people: 'Will and Richard',
        eventName_id: 'Coachella'
      },
      {
        name: 'Food',
        date: '06/22/23',
        amount: 100,
        entry: 'Bought everyone food',
        transactionComplete: false,
        people: 'Will and Richard',
        eventName_id: 'Coachella'
      },
    ],
  },
  {
    eventName: 'Bonaroo',
    eventDescription:  '2 Years at Bonaroo',
    transactions: [
      {
        name: 'Water',
        date: '06/22/23',
        amount: 300,
        entry: 'Bought everyone water',
        transactionComplete: false,
        people: 'Will and Richard',
        eventName_id: 'Bonaroo'
      },
    ],
  },
];

const transactionsReducer = (state = defaultState, action) => {

  switch (action.type) {
    case types.editTransaction: {
      //do some stuff
      return {
        ...state,
      }
    };
    case types.deleteTransaction: {
      //do some stuff
      return {
        ...state,
      };
    }
    case types.completeTransaction: {
      //do some stuff
      return {
        ...state,
      };
    }
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