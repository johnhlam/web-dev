import { CREATE_TUIT, DELETE_TUIT, FIND_ALL_TUITS, UPDATE_TUIT } from '../actions/tuits-action';

const tuitsReducer = (state = [], action) => {
  switch (action.type) {
    case FIND_ALL_TUITS:
      return action.tuits;
    case CREATE_TUIT:
      return [
        ...state,
        action.newTuit,
      ];
    case UPDATE_TUIT:
      return state.map(tuit => tuit._id === action.tuit._id ? action.tuit : tuit);
    case DELETE_TUIT:
      return state.filter(tuit => tuit._id !== action.tuit._id);
    default:
      return state;
  }
};
export default tuitsReducer;