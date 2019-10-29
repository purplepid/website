module.exports = {
    siteMetadata: {
        title: `purplepid website`,
        description: 'Official page for purplepid',
        author: `Bruno Mikec`
    },
    plugins: [
        'gatsby-plugin-sass',
        `gatsby-plugin-react-helmet`,
        'gatsby-plugin-offline',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        'gatsby-transformer-json',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content/`
            }
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ]
};
