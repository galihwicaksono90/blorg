/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Goblorg`,
    author: `Galih Wicaksono`,
    description: `A self taught front-end developer documenting and sharing his learning process`,
    social: {
      github: { url: `https:github.com/gorillahobo` },
      website: { url: `https://www.galihwicaksono.xyz` },
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // name: `pages`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-transformer-orga`,
      options: {
        // askdjhf
      },
    },
    {
      resolve: "gatsby-plugin-emotion",
      options: {
        //insert options here
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-fonts-v2",
      options: {
        fonts: [
          { family: "Source Code Pro" },
          { family: "Alfa Slab One" },
          { family: "Open Sans" },
        ],
      },
    },
  ],
}
