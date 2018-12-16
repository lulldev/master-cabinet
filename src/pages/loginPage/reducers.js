export const initialState = {
  todos: [],
}

export const signIn = (state, payload) => ({
  ...state,
  todos: [
    ...state.todos,
    payload,
  ]
});