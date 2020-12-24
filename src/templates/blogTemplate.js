import React from "react"

const BlogTemplate = ({ pageContext }) => {
  const { content, title, date } = pageContext
  return (
    <div>
      <h1>{title}</h1>
      <h3>
        <span style={{ color: "#ebdbb2" }}>Posted at:</span> {date}
      </h3>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <h1>Hello</h1>
    </div>
  )
}

export default BlogTemplate
