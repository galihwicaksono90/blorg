import React, { useContext } from "react"
import GlobalContext from "../store/GlobalContext"
import styled from "@emotion/styled"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaRegWindowClose } from "react-icons/fa"

const StyledBurger = styled.button`
  outline: none;
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors[props.themeColor].foreground};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors[props.themeColor].magenta};
  }
`
const Burger = ({ sidebarHandler, sidebar }) => {
  const { globalState } = useContext(GlobalContext)
  const { themeColor } = globalState
  return (
    <StyledBurger onClick={() => sidebarHandler()} themeColor={themeColor}>
      <h2>{sidebar ? <FaRegWindowClose /> : <GiHamburgerMenu />}</h2>
    </StyledBurger>
  )
}

export default Burger
