import React from "react"
import styled from "@emotion/styled"

const StyledFigure = styled.figure`
  max-height: auto;
  height: auto;
`

const HeaderImage = ({ image, description = "" }) => {
  return (
    <StyledFigure>
      <img
        src={image}
        alt={description}
        loading="lazy"
        style={{
          objectFit: "cover",
          minHeight: "100%",
          width: "100%",
          objectPosition: "center center",
          marginBottom: "1rem",
        }}
        rel={description}
      />
    </StyledFigure>
  )
}

export default HeaderImage
