import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const Seo = ({
  title,
  description,
  author,
  website,
  keywords,
  isBlogPost,
  image,
}) => {
  const data = useStaticQuery(graphql`
    query DefaultSEOQuery {
      site {
        siteMetadata {
          title
          description
          author
          social {
            github {
              url
            }
            website {
              url
            }
          }
        }
      }
    }
  `)

  console.log(data.site.siteMetadata)
  const metaDescription = description || data.site.siteMetadata.description
  const metaTitle =
    (title && "Goblorg" + " | " + title.charAt(0).toUpperCase()) +
      title.slice(1) || data.site.siteMetadata.title
  const metaAuthor = author || data.site.siteMetadata.author
  const metaUrl = website || data.site.siteMetadata.social.website.url
  const metaKeywords = keywords || ["gatsby org-mode blog", "gatsby blog"]

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {image && <meta name="image" content={image} />}
      <meta name="og:url" content={metaUrl} />
      {isBlogPost ? <meta name="og:type" content="article" /> : null}
      {image ? <meta name="og:image" content={image} /> : null}
      <meta name="og:title" content={title} />
      <meta name="og:description" content={metaDescription} />
    </Helmet>
  )
}

// const detailsQuery = graphql`
// query DefaultSEOQuery {
//     site {
//         siteMetadata {
//         title
//         description
//         author
//         social {
//             name
//             url
//       }
//     }
//   }
// `

export default Seo
