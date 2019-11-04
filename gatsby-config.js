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
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Rubik`]
            }
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ]
};
