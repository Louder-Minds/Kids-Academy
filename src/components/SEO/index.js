import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import uiltje from './favicon.ico';

const SEO = ({ siteTitle, lang = 'nl' }) => {
    const data = useStaticQuery(graphql`
        query SEO {
            site {
                siteMetadata {
                    title
                    description
                    author
                    siteUrl
                    description
                    keywords
                }
            }
        }
    `);

    const { title, description, author, siteUrl, keywords } = data.site.siteMetadata;
    const text = siteTitle === undefined ? `${title}` : `${siteTitle} | ${title}`;

    return (
        <Helmet
            title={text}
            link={[
                { rel: 'canonical', href: siteUrl },
                { rel: 'icon', href: 'static/favicon.ico' },
            ]}
            meta={[
                // General head tags
                { name: 'image', content: 'static/favicon.ico' },
                { name: 'description', content: description },
                { name: 'keywords', content: keywords },
                { name: 'generator', content: 'GatsbyJS' },
                { name: 'author', content: author },

                // Open Graph data
                { property: 'og:image', content: 'static/favicon.ico' },
                { property: 'og:title', content: text },
                { property: 'og:url', content: siteUrl },
                { property: 'og:type', content: 'website' },
                { property: 'og:description', content: description },
                { property: 'og:locale', content: 'nl' },

                // Twitter card data
                { name: 'twitter:card', content: description },
                { name: 'twitter:title', content: text },
                { name: 'twitter:description', content: description },
                { name: 'twitter:url', content: siteUrl },
                { name: 'twitter:creator', content: author },
                { name: 'twitter:image', content: 'static/favicon.ico' },
                { name: 'twitter:site', content: siteUrl },
            ]}
        >
            {/* <script type="application/ld+json">
                {`
                    {
                        "@context": "https://schema.org",
                        "@type": "Company",
                        "url": "https://kidsacademy.nl",
                        "name": "Kids Academy",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+5-601-785-8543",
                            "contactType": "Customer Support"
                        }
                    }
                `}
            </script> */}
            <html lang={lang} />
        </Helmet>
    );
};

export default SEO;
