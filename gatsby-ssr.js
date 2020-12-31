import React from "react"
import { ThemeProvider, Global, css } from "@emotion/react"
import Theme from "./src/themes/theme"

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={Theme}>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            padding: 0;
            margin: 0;
          }
          html,
          body,
          #___gatsby,
          #gatsby-focus-wrapper {
            font-family: "Jost*";
            font-size: 16px;
            height: 100%;
          }
        `}
      />
      {element}
    </ThemeProvider>
  )
}
