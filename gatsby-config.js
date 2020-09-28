require('dotenv').config({
    path: `.env`,
});

module.exports = {
    siteMetadata: {
        title: `Kids Academy`,
        description: `Bijles rekenen en taal`,
        author: `@grubennijhuis`,
        siteUrl: `https://kidsacademy.nl`,
        keywords: 'Bijles, Rekenen, Amsterdam, Haarlem, Laren, Summerschool, Taal, Kind, Goedkoop',
    },
    plugins: [
        `gatsby-plugin-robots-txt`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-transition-link`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-167433246-1',
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-intl`,
            options: {
                path: `${__dirname}/src/util/lang`,

                languages: [`nl`, `en`],

                defaultLanguage: `nl`,

                redirect: true,
            },
        },
        // {
        //     resolve: `gatsby-plugin-manifest`,
        //     options: {
        //         name: `Kids Academy`,
        //         short_name: `Kids Academy`,
        //         start_url: `/`,
        //         background_color: `#ffffff`,
        //         theme_color: '#14b09c',
        //         display: `standalone`,
        //         icon: `static/favicon.ico`,
        //     },
        // },
    ],
};
