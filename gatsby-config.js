module.exports = {
    siteMetadata: {
        title: 'purplepid',
        description: 'Software engineers based in Stockholm. We are consultants, advisors & open-source advocates.',
        author: 'Bruno Mikec & Marc Neander'
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-sass',
            options: {
                includePaths: [`${__dirname}/src`]
            }
        },
        'gatsby-plugin-react-helmet',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        'gatsby-plugin-layout',
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: ['Rubik:400,500,700']
            }
        },
        'gatsby-plugin-offline'
    ]
};
