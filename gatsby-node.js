const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return new Promise((resolve, reject) => {
        resolve(
            graphql(`
                {
                    allContentfulCursus(filter: { node_locale: { eq: "nl" } }) {
                        edges {
                            node {
                                titel
                            }
                        }
                    }
                    allContentfulBlogPost(filter: { node_locale: { eq: "nl" } }) {
                        edges {
                            node {
                                naamVanDePost
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
                result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
                    const titel = node.naamVanDePost.toLowerCase().replace(/\s/g, '-');
                    createPage({
                        path: `/blog/${titel}`,
                        component: path.resolve('src/templates/blogpost.js'),
                        context: {
                            slug: node.naamVanDePost,
                        },
                    });
                });
                return;
            })
        );
    });
};
