import { FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from '../actions';
const initialState = {
  characters: [],
  isFetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    case FETCHING:
      return {
        ...state,
        isFetching: true,
        error: null
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        characters: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
