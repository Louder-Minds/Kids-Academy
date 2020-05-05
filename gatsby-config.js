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
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
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
