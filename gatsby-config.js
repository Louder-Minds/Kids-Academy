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
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: "https://kidsacademy.us2.list-manage.com/subscribe/post?u=6d9737865e3bf9bf2143943a2&amp;id=c9f157f4b5",
                timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
            },
        },
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
