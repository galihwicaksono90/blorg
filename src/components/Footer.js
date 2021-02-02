import React, { useContext } from "react"
import GlobalContext from "../store/GlobalContext"
import styled from "@emotion/styled"
import { AiFillGithub, AiFillLinkedin, AiFillFile } from "react-icons/ai"

const StyledFooter = styled.footer`
  margin-top: auto;
  width: 100%;
  padding: 2rem 0 0 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 0.85rem;
`

const StyledLinkLogos = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  & li {
    list-style: none;
    padding: 0.5rem;
  }
`
const StyleLinkLogo = styled.li`
  & svg {
    height: 2rem;
    width: 2rem;
    color: ${props => props.theme.colors[props.themeColor].foreground};
  }
`
const LinkLogo = ({ children, to }) => {
  const { globalState } = useContext(GlobalContext)
  const { themeColor } = globalState
  return (
    <StyleLinkLogo themeColor={themeColor}>
      <a href={to} download>
        {children}
      </a>
    </StyleLinkLogo>
  )
}

const LinkLogos = () => {
  return (
    <StyledLinkLogos>
      <LinkLogo to="https://github.com/gorillahobo">
        <AiFillGithub />
      </LinkLogo>
      <LinkLogo to="resume.pdf">
        <AiFillFile />
      </LinkLogo>
    </StyledLinkLogos>
  )
}

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        All materials © 2020, Galih Wicaksono
        <br />
        Powered by&nbsp;
        <a href="https://orgmode.org/">org-mode</a> using&nbsp;
        <a href="https://github.com/orgapp/orgajs">orgajs </a> and&nbsp;
        <a href="https://www.gatsbyjs.com/">Gatsby</a>.
      </p>
      <LinkLogos />
    </StyledFooter>
  )
}

export default Footer
