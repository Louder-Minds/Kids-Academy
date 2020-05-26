require('dotenv').config({
    path: `.env`,
});

module.exports = {
    siteMetadata: {
        title: `KidsAcademy`,
        description: `...`,
        author: `@grubennijhuis`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-transition-link`,
        // {
        //     resolve: "gatsby-plugin-transition-link",
        //     options: {
        //         layout: require.resolve(`./src/components/Layout`)
        //       }
        //  },
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
            resolve: `gatsby-plugin-intl`,
            options: {
                // language JSON resource path
                path: `${__dirname}/src/util/lang`,
                // supported language
                languages: [`nl`, `en`],
                // language file path
                defaultLanguage: `nl`,
            },
        },
        // {
        //     resolve: `gatsby-source-stripe`,
        //     options: {
        //         objects: [
        //             'Balance',
        //             'BalanceTransaction',
        //             'Product',
        //             'ApplicationFee',
        //             'Sku',
        //             'Subscription',
        //         ],
        //         secretKey: 'stripe_secret_key_here',
        //         downloadFiles: true,
        //     },
        // },
    ],
};
