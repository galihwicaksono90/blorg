import React from "react"
import { GiHamburgerMenu } from "react-icons/gi"
import { GrClose } from "react-icons/gr"

const Burger = ({ sidebarHandler, sidebar }) => {
  return (
    <button className="button" onClick={() => sidebarHandler()}>
      <h2>{sidebar ? <GrClose /> : <GiHamburgerMenu />}</h2>
    </button>
  )
}

export default Burger
