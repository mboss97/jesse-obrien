/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Jesse O'Brien`,
    siteUrl: `https://www.jesseobrien.com.au`
  },
  plugins: [
    "gatsby-plugin-sass", 
    "gatsby-plugin-image", 
    "gatsby-transformer-remark", 
    "gatsby-plugin-sharp", 
    "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  {
    resolve: `gatsby-plugin-sitemap`
  },
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: `https://www.jesseobrien.com.au`,
      sitemap: `https://www.jesseobrien.com.au/sitemap/sitemap-index.xml`,
      policy: [{ userAgent: '*', allow: '/' }]
    }
  },
]
};