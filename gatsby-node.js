const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
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
                    const titel = node.titel.toLowerCase().replace(/\s/g, '-');
                    createPage({
                        path: titel,
                        component: path.resolve('src/templates/cursus.js'),
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
