import React, { createContext, useReducer } from "react"
import GlobalReducer from "./GlobalReducer"

let defaultThemeColor = "light"
const defaultSidebarState = false

if (typeof window !== "undefined") {
  if (localStorage.getItem("themeColor"))
    defaultThemeColor = localStorage.getItem("themeColor")
}

const GlobalContext = createContext()
const defaultValues = {
  themeColor: defaultThemeColor,
  sidebar: defaultSidebarState,
}

export const GlobalContextProvider = ({ children }) => {
  const [globalState, globalDispatch] = useReducer(GlobalReducer, defaultValues)

  return (
    <GlobalContext.Provider value={{ globalState, globalDispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
