module.exports = {
  siteMetadata: {
    title: `Ingsecom`,
    siteUrl: `http://www.ingsecom.cpom`,
    description: `Líderes en la oferta de servicios de informática e ingeniería civil.`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        precision: 8,
      },
    },
  ]
};