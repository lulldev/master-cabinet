export const initialState = {
  todos: [],
}

export const login = (state, payload) => ({
  ...state,
  todos: [
    ...state.todos,
    payload,
  ]
});