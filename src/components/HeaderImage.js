import React from "react"
import styled from "@emotion/styled"

const StyledFigure = styled.figure`
  max-height: 600px;
  height: auto;
`

const HeaderImage = ({ image, image__https, description = "" }) => {
  console.log(image)
  return (
    <StyledFigure>
      <img
        src={require(`../posts/images/${image}`)}
        alt={description}
        loading="lazy"
        /* height="450" */
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
