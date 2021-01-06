import React, { useContext } from "react"
import GlobalContext from "../store/GlobalContext"
import styled from "@emotion/styled"
import { GiHamburgerMenu } from "react-icons/gi"
import { FaRegWindowClose } from "react-icons/fa"

const StyledBurger = styled.button`
  display: none;
  outline: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors[props.themeColor].foreground};

  transform: scale(2);

  & svg {
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      cursor: pointer;
      color: ${props => props.theme.colors[props.themeColor].magenta};
    }
  }
`
const Burger = () => {
  const { globalState, globalDispatch } = useContext(GlobalContext)
  const { themeColor, sidebar } = globalState
  return (
    <StyledBurger
      onClick={() => globalDispatch({ type: "sidebarControl" })}
      themeColor={themeColor}
    >
      {sidebar ? <FaRegWindowClose /> : <GiHamburgerMenu />}
    </StyledBurger>
  )
}

export default Burger
