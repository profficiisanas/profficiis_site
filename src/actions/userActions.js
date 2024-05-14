export const userLoginRequest = () => ({ type: 'USER_LOGIN_REQUEST' });
export const userLoginSuccess = (userInfo) => ({ type: 'USER_LOGIN_SUCCESS', payload: userInfo });
export const userLoginFail = (error) => ({ type: 'USER_LOGIN_FAIL', payload: error });

export const login = (email, password) => async (dispatch) => {
  dispatch(userLoginRequest());
  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (response.ok) {
      dispatch(userLoginSuccess(data));
      localStorage.setItem('userInfo', JSON.stringify(data));
    } else {
      throw new Error(data.message || "Unable to login");
    }
  } catch (error) {
    dispatch(userLoginFail(error.toString()));
  }
};
