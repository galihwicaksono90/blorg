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
        `}
      />
      {element}
    </ThemeProvider>
  )
}

// html,
// body {
//   font-family: ${props => props.theme.fonts.main};
// }
