import React from "react"
import styled from "@emotion/styled"

const Layout = ({ children, className, title }) => {
  return (
    <div className={className}>
      <h1>{title}</h1>
      {children}
    </div>
  )
}

StyledLayout = styled(Layout)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: blue;

  & div {
    width: 70%;
    background-color: purple;
  }
`

export default StyledLayout
