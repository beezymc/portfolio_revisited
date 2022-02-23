module.exports = {
  siteMetadata: {
      title: `David Rajec`,
    siteUrl: `https://www.davidrajec.com`,
    description: 'David Rajec\'s Portfolio'
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-material-ui", "gatsby-theme-material-ui", "gatsby-plugin-sharp", "gatsby-transformer-sharp",
  {
    resolve: "gatsby-transformer-remark",
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 800,
          },
        },
      ],
    },
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `gatsby-starter-default`,
      short_name: `starter`,
      start_url: `/`,
      background_color: `#663399`,
      display: `minimal-ui`,
      icon: `src/images/gatsby-icon.png`,
    },
  },
  {
    resolve: `gatsby-plugin-s3`,
    options: {
      bucketName: "davidrajec.com",
    },
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      "name": "blog",
      "path": "./src/blog/",
    },
    __key: "blog"
  }]
};