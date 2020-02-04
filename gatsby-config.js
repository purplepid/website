module.exports = {
    siteMetadata: {
        title: 'purplepid',
        description: 'Official page for purplepid',
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
        'gatsby-plugin-offline',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-google-fonts',
            options: {
                fonts: ['Rubik:400,500,700']
            }
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`
            }
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'purplepid',
                short_name: 'purplepid',
                start_url: '/',
                background_color: '#f7f0eb',
                theme_color: '#a2466c',
                display: 'standalone',
                icon: 'src/images/Icon.png'
            }
        }
        // 'gatsby-plugin-offline',
    ]
};
