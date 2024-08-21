import { userService } from '../services/userService';

export const FETCH_USER_REQUEST = 'FETCH_USER_REQUEST';
export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAILURE = 'FETCH_USER_FAILURE';

export const fetchUser = (userId) => async (dispatch) => {
  dispatch({ type: FETCH_USER_REQUEST });
  try {
    const user = await userService.fetchUser(userId);
    dispatch({ type: FETCH_USER_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: FETCH_USER_FAILURE, payload: error.message });
  }
};
