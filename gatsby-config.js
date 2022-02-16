module.exports = {
  siteMetadata: {
      title: `David Rajec`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-transformer-remark", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
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