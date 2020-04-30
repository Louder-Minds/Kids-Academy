const path = require('path');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
        const cursusTemplate = path.resolve(
            `${__dirname}/src/templates/Cursus.js`
        );
        resolve(
            graphql(`
                {
                    allContentfulCursus {
                        edges {
                            node {
                                titel
                            }
                        }
                    }
                }
            `).then((result) => {
                if (result.errors) {
                    reject(result.errors);
                }
                result.data.allContentfulCursus.edges.forEach(({ node }) => {
                    const titel = node.titel.toLowerCase();
                    createPage({
                        path: titel,
                        component: cursusTemplate,
                        context: {
                            slug: node.titel,
                        },
                    });
                });
                return;
            })
        );
    });
};
