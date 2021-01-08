import React, { createContext, useReducer, useEffect } from "react"
import GlobalReducer from "./GlobalReducer"

const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
  let defaultValues = { themeColor: "light", sidebar: false }
  const [globalState, globalDispatch] = useReducer(GlobalReducer, defaultValues)

  useEffect(() => {
    globalDispatch({
      type: "changeTheme",
      payload: localStorage.getItem("themeColor"),
    })
  }, [])

  return (
    <GlobalContext.Provider value={{ globalState, globalDispatch }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
