export const LoginStart = (userCredentials) => ({
  type: 'LOGIN_START',
});

export const LoginSucessful = (user) => ({
  type: 'LOGIN_SUCCESS',
  payload: user,
});

export const LoginFilure = (user) => ({
  type: 'LOGIN_FAILURE',
});
