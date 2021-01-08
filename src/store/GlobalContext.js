import React, { createContext, useReducer } from "react"
import GlobalReducer from "./GlobalReducer"

const GlobalContext = createContext()
if (typeof window.localStorage !== "undefined") {
  if (localStorage.getItem("themeColor")) {
    const defaultValues = {
      themeColor: localStorage.getItem("themeColor"),
      sudebar: false,
    }
  } else {
    const defaultValues = { themeColor: "light", sidebar: false }
  }
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
