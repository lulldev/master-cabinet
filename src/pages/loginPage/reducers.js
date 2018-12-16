export const initialState = {
  requestSignIn: null,
  responseSignIn: null,
  errorSignIn: null,
}

export const requestSignIn = (state) => ({
  ...state,
  requestSignIn: true,
});

export const responseSignIn = (state, payload) => ({
  ...state,
  responseSignIn: payload.response,
});

export const errorSignIn = (state, payload) => ({
  ...state,
  errorSignIn: payload.error,
});
