const GlobalReducer = (state, { type, payload }) => {
  switch (type) {
    case "changeTheme":
      return { ...state, isDark: !state.isDark }
    default:
      return state
  }
}

export default GlobalReducer
