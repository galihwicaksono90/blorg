import React, { createContext, useReducer } from "react"
import GlobalReducer from "./GlobalReducer"

const GlobalContext = createContext()
const defaultValues = { isDark: false }

export const GlobalContextProvider = ({ children }) => {
  const [globalState, globalDispatch] = useReducer(GlobalReducer, defaultValues)
  return (
    <GlobalContext.Provider value={{ globalState, globalDispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
