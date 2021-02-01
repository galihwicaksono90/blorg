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
    social: [
      {
        name: `Github`,
        url: `https:github.com/gorillahobo`,
      },
      {
        name: `Proudly hosted on Netlify`,
        url: `https://pedantic-fermat-1ba180.netlify.app/`,
      },
    ],
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
