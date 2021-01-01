import React, { useContext } from "react"
import GlobalContext from "../store/GlobalContext"
import styled from "@emotion/styled"
import {
  HiOutlineLightBulb as LightOn,
  HiLightBulb as LightOff,
} from "react-icons/hi"

const StyledThemeSwitcher = styled.button`
  color: ${props => props.theme.colors[props.themeColor].foreground};

  margin-left: ${props => props.theme.spacings.small};

  background: none;
  border: none;
  outline: none;

  transform: scale(2);
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    &:hover {
      cursor: pointer;
      color: ${props => props.theme.colors[props.themeColor].yellow};
    }
  }

  @media screen and (max-width: 720px) {
    margin-left: ${props => props.theme.spacings.medium};
  }
`

const ThemeSwitcher = () => {
  const { globalState, globalDispatch } = useContext(GlobalContext)
  const { themeColor } = globalState
  return (
    <div>
      {themeColor === "light" ? (
        <StyledThemeSwitcher
          onClick={() =>
            globalDispatch({ type: "changeTheme", payload: "dark" })
          }
          themeColor={themeColor}
        >
          <LightOn />
        </StyledThemeSwitcher>
      ) : (
        <StyledThemeSwitcher
          onClick={() =>
            globalDispatch({ type: "changeTheme", payload: "light" })
          }
          themeColor={themeColor}
        >
          <LightOff />
        </StyledThemeSwitcher>
      )}
    </div>
  )
}

export default ThemeSwitcher
