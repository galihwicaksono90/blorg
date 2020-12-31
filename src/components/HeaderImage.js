import React from "react"

const HeaderImage = ({ image, description = "" }) => {
  return (
    <figure>
      <img
        src={image}
        alt=""
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
    </figure>
  )
}

export default HeaderImage
