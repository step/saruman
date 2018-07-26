module.exports = {
  siteMetadata: {
    title: `sauron`
  },
  plugins: [
    {
      resolve: `gatsby-source-mongodb`,
      options: {dbName: `sauron`, collection:`results`}
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./get_images`
      }
    },
    `gatsby-plugin-sass`
  ],
  mapping:{
    "mongodbSauronResults.author.username":"ImagesJson"
  }
}
