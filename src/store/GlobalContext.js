import React, { createContext, useReducer, useEffect } from "react"
import GlobalReducer from "./GlobalReducer"

let defaultThemeColor = "light"
const defaultSidebarState = false

const GlobalContext = createContext()
const defaultValues = {
  themeColor: defaultThemeColor,
  sidebar: defaultSidebarState,
}

export const GlobalContextProvider = ({ children }) => {
  const [globalState, globalDispatch] = useReducer(GlobalReducer, defaultValues)

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("themeColor"))
        globalDispatch({
          type: "changeTheme",
          payload: localStorage.getItem("themeColor"),
        })
    }
  }, [])

  return (
    <GlobalContext.Provider value={{ globalState, globalDispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
