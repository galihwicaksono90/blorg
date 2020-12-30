import React from "react"
import styled from "@emotion/styled"

const StyledFooter = styled.footer`
  margin-top: auto;
  width: 100%;
  padding: 4rem;
  height: 5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        All materials © 2020, Galih Wicaksono
        <br />
        Powered by
        <a href="https://orgmode.org/"> org-mode</a> using
        <a href="https://github.com/orgapp/orgajs"> orgajs </a>
        and
        <a href="https://www.gatsbyjs.com/"> Gatsby</a>.
      </p>
    </StyledFooter>
  )
}

export default Footer
