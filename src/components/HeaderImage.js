import React from "react"
import styled from "@emotion/styled"

const StyledHeaderImage = styled.div`
  height: 430px;
  max-width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

const HeaderImage = ({ image }) => {
  console.log(image)
  return (
    <StyledHeaderImage>
      <img src={image} alt="" />
    </StyledHeaderImage>
  )
}

export default HeaderImage
