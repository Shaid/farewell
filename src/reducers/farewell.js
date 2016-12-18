import * as types from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case types.FAREWELL_GENERATE:
            return [
              ...state,
            Object.assign({}, action.farewell, action.person)
          ];
        default:
          return state;
    }
};
