import { authService } from '../services/authService';
import { saveToStorage, removeFromStorage } from '../../utils/storage';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export const login = (credentials) => async (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const { user, token } = await authService.login(credentials);
    saveToStorage('authToken', token);
    dispatch({ type: LOGIN_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.message });
  }
};

export const logout = () => async (dispatch) => {
  try {
    await authService.logout();
    removeFromStorage('authToken');
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    console.error('Logout failed:', error);
  }
};
