import React, { useContext } from "react"
import GlobalContext from "../store/GlobalContext"
import styled from "@emotion/styled"
import { AiFillGithub, AiFillLinkedin, AiFillFile } from "react-icons/ai"

const StyledFooter = styled.footer`
  margin-top: auto;
  width: 100%;
  padding: 1rem 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const StyledLinkLogos = styled.div`
  width: 150px;
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`
const StyleLinkLogo = styled.div`
  & svg {
    height: 2.2rem;
    width: 2.2rem;
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
      <LinkLogo to="https://www.duckduckgo.com">
        <AiFillLinkedin />
      </LinkLogo>
      <LinkLogo to="resume.txt">
        <AiFillFile />
      </LinkLogo>
    </StyledLinkLogos>
  )
}

const Footer = () => {
  return (
    <StyledFooter>
      <LinkLogos />
      <p>
        All materials © 2020, Galih Wicaksono
        <br />
        Powered by&nbsp;
        <a href="https://orgmode.org/">org-mode</a> using&nbsp;
        <a href="https://github.com/orgapp/orgajs">orgajs </a> and&nbsp;
        <a href="https://www.gatsbyjs.com/">Gatsby</a>.
      </p>
    </StyledFooter>
  )
}

export default Footer
