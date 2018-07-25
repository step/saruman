module.exports = {
  siteMetadata: {
    title: `sauron`
  },
  plugins: [
    {
      resolve: `gatsby-source-mongodb`,
      options: {dbName: `sauron`, collection:`results`}
    },
    `gatsby-plugin-sass`
  ]
}
