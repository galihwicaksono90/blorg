const GlobalReducer = (state, { type, payload }) => {
  switch (type) {
    case "changeTheme":
      return { ...state, themeColor: payload }
    case "sidebarControl":
      return { ...state, sidebar: !state.sidebar }
    default:
      return state
  }
}

export default GlobalReducer
