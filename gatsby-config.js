module.exports = {
    siteMetadata: {
        title: `purplepid`,
        description: "Official page for purplepid",
        author: `Bruno Mikec`
    },
    plugins: [
        "gatsby-plugin-sass",
        `gatsby-plugin-react-helmet`,
        "gatsby-plugin-offline",
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Rubik`]
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: "images",
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `purplepid`,
              short_name: `purplepid`,
              start_url: `/`,
              background_color: `#f7f0eb`,
              theme_color: `#a2466c`,
              display: `standalone`,
              icon: `src/images/Icon.png`
            },
          },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ]
};
