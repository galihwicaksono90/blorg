import React, { useContext } from "react"
import GlobalContext from "../store/GlobalContext"
import styled from "@emotion/styled"

const StyledArticle = styled.article`
  max-width: 55rem;
  width: 100%;
  min-height: calc(100vh - 74px);
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacings.small};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Article = ({ children }) => {
  const { globalState } = useContext(GlobalContext)
  const { themeColor } = globalState
  return <StyledArticle themeColor={themeColor}>{children}</StyledArticle>
}

export default Article

// max-width: 55rem;
// min-height: 100%;
// width: 100%;
// padding: 0 ${props => props.theme.spacings.small};
// margin: 0 auto;

// display: flex;
// flex-direction: column;

// color: ${props => props.theme.colors[props.themeColor].foreground};
// font-family: ${props => props.theme.fonts.main};

// & a {
//   text-decoration: none;
//   color: ${props => props.theme.colors[props.themeColor].blue};
//   &:hover {
//     text-decoration: underline;
//   }
// }
