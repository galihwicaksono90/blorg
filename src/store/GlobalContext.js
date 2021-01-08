import React, { createContext, useReducer, useEffect } from "react"
import GlobalReducer from "./GlobalReducer"
import storage from "local-storage-fallback"

const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  let defaultValues = {
    themeColor: storage.getItem("themeColor")
      ? storage.getItem("themeColor")
      : "light",
    sidebar: false,
  }
  const [globalState, globalDispatch] = useReducer(GlobalReducer, defaultValues)

  return (
    <GlobalContext.Provider value={{ globalState, globalDispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
