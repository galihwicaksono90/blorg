import React from "react"
import styled from "@emotion/styled"
import { MdDateRange, MdQueryBuilder } from "react-icons/md"

const TitleDescriptions = styled.ul`
  display: flex;
`
const StyledTitleDescription = styled.li`
  color: ${props => props.theme.colors.brblue};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: ${props => props.theme.spacings.small};
  & p {
    font-size: 0.9rem;
    margin-left: ${props => props.theme.spacings.xxSmall};
  }
`
const TitleDescription = ({ date = "n/a", timeToRead = "n/a" }) => {
  return (
    <TitleDescriptions>
      <StyledTitleDescription>
        <MdDateRange />
        <p>{date}</p>
      </StyledTitleDescription>
      <StyledTitleDescription>
        <MdQueryBuilder />
        <p>
          {timeToRead} {timeToRead === 1 ? "Minute Read" : "Minutes Read"}
        </p>
      </StyledTitleDescription>
    </TitleDescriptions>
  )
}

export default TitleDescription
