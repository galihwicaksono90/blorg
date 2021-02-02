import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"

const StyledFigure = styled.figure`
  max-height: 600px;
  margin-bottom: ${props => props.theme.spacings.medium};
  // height: auto;
`

const HeaderImage = ({ image, description = "" }) => {
  return (
    <StyledFigure>
      <Img fluid={image} alt={description} />
    </StyledFigure>
  )
}

export default HeaderImage
