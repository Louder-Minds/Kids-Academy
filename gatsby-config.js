module.exports = {
    siteMetadata: {
        title: `KidsAcademy`,
        description: `...`,
        author: `@grubennijhuis`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-netlify-cms`,
        // {
        //     resolve: `gatsby-source-filesystem`,
        //     options: {
        //         path: `${__dirname}/src/images`,
        //     },
        // },
        {
            resolve: `gatsby-plugin-netlify-cms`,
            options: {
                enableIdentityWidget: true,
            },
        },
    ],
};
