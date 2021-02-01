import React, { createContext, useReducer, useEffect } from "react"
import GlobalReducer from "./GlobalReducer"

const GlobalContext = createContext()
const defaultValues = { themeColor: "light", sidebar: false }

export const GlobalContextProvider = ({ children }) => {
  const [globalState, globalDispatch] = useReducer(GlobalReducer, defaultValues)

  if (localStorage.getItem("themeColor")) console.log("okayt")

  return (
    <GlobalContext.Provider value={{ globalState, globalDispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
