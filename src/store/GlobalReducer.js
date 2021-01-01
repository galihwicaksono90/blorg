const GlobalReducer = (state, { type, payload }) => {
  switch (type) {
    case "changeTheme":
      console.log({ type, payload })
      return { ...state, themeColor: payload }
    default:
      return state
  }
}

export default GlobalReducer
