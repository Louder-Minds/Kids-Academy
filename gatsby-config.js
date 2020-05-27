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
        `gatsby-plugin-scroll-reveal`,
        // {
        //     resolve: `gatsby-plugin-scroll-reveal`,
        //     options: {
        //         threshold: 15, // Percentage of an element's area that needs to be visible to launch animation
        //         once: true, // Defines if animation needs to be launched once
        //         // disable: false, // Flag for disabling animations

        //         // Advanced Options
        //         // selector: '[data-sal]', // Selector of the elements to be animated
        //         // animateClassName: 'sal-animate', // Class name which triggers animation
        //         // disabledClassName: 'sal-disabled', // Class name which defines the disabled state
        //         // rootMargin: '0% 50%', // Corresponds to root's bounding box margin
        //         // enterEventName: 'sal:in', // Enter event name
        //         // exitEventName: 'sal:out', // Exit event name
        //     },
        // },
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
