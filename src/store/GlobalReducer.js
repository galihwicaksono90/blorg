import storage from "local-storage-fallback"

const GlobalReducer = (state, { type, payload }) => {
  switch (type) {
    case "changeTheme":
      storage.setItem("themeColor", payload)
      return { ...state, themeColor: payload }
    case "sidebarControl":
      return { ...state, sidebar: !state.sidebar }
    default:
      return state
  }
}

export default GlobalReducer
