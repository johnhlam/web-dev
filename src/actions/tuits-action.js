import * as service from '../services/tuits-service';

export const CREATE_TUIT = 'CREATE_TUIT';
export const FIND_ALL_TUITS = 'FIND_ALL_TUITS';
export const UPDATE_TUIT = 'UPDATE_TUIT';
export const DELETE_TUIT = 'DELETE_TUIT';

export const createTuit = async (dispatch, tuit) => {
  const fullTuit = {
    tuit,
    postedBy: {
      "username": "ReactJS"
    },
    handle: 'ReactJS',
    "avatar-image": "react-logo.png",
    "logo-image": "react-logo.png",
    liked: false,
    verified: false,
    disliked: false,
    stats: {
      retuits: 111,
      likes: 222,
      comments: 333,
      dislikes: 50,
    }
  };
  const newTuit = await service.createTuit(fullTuit);
  dispatch({ type: CREATE_TUIT, newTuit });
};

export const findAllTuits = async (dispatch) => {
  const tuits = await service.findAllTuits();
  dispatch({ type: FIND_ALL_TUITS, tuits });
};

export const updateTuit = async (dispatch, tuit) => {
  const status = await service.updateTuit(tuit);
  dispatch({ type: UPDATE_TUIT, tuit });
};

export const deleteTuit = async (dispatch, tuit) => {
  const response = await service.deleteTuit(tuit);
  dispatch({ type: DELETE_TUIT, tuit });
}; 