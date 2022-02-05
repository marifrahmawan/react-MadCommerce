import { publicRequest } from '../tools/requestMethod';
import { loginFailure, loginStart, loginSuccess } from './user-slice';

export const login = async (dispatch, username, password) => {
  dispatch(loginStart());
  try {
    const response = await publicRequest.post('auth/login', {
      username,
      password,
    });

    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
