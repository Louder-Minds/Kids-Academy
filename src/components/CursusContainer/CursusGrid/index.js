import React, { useEffect } from 'react';
import { Container } from './style';
import CursusBlock from '../CursusBlock';
import { useStaticQuery, graphql } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';
// import { motion, useAnimation } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';

// /*
//     Animated box is used to add a fade-up animation
//     to the grid. Using framer and adding a parent to 
//     the original componenent. Making it a wrapper.
// */
// const AnimatedBox = ({ children, count }) => {
//     const controls = useAnimation();
//     const [ref, inView] = useInView();

//     useEffect(() => {
//         if (inView) controls.start('visible');
//     }, [controls, inView]);

//     const variants = {
//         visible: () => ({
//             opacity: 1,
//             y: 0,
//             transition: {
//                 type: 'spring',
//                 stiffness: 40,
//                 delay: count * 0.075,
//             },
//         }),
//         hidden: { opacity: 0, y: '65px' },
//     };

//     return (
//         <motion.div
//             ref={ref}
//             animate={controls}
//             initial="hidden"
//             variants={variants}
//             style={{
//                 width: '100%',
//                 display: 'flex',
//                 justifyContent: 'center',
//             }}
//         >
//             {children}
//         </motion.div>
//     );
// };

/*
    Queries all the courses and filters based 
    on language. Because of linking bugs both
    courses use the same link.
*/
const CursusGrid = ({ intl }) => {
    const data = useStaticQuery(graphql`
        query names {
            allContentfulCursus(sort: { fields: positie, order: ASC }) {
                edges {
                    node {
                        titel
                        fotoVanDeCursus {
                            fluid(quality: 90, maxWidth: 300) {
                                ...GatsbyContentfulFluid_withWebp
                            }
                        }
                        cursusPoints {
                            json
                        }
                        contentful_id
                        node_locale
                        alleenInHetEngels
                    }
                    next {
                        titel
                        node_locale
                        contentful_id
                    }
                }
            }
        }
    `);

    /*
        The reason we have these big if/else is because
        creating 'one' return function which checks for 
        language makes it even more messy.
    */
    const returnBlocks = () => {
        if (intl.locale === 'nl') {
            return data.allContentfulCursus.edges.map(({ node }, i) => {
                let coursename, linkname;
                if (node.node_locale === 'nl') {
                    coursename = node.titel;
                    linkname = node.titel;
                    const { titel, cursusPoints, fotoVanDeCursus, alleenInHetEngels } = node;

                    return (
                        // <AnimatedBox count={i / 2}>
                            <CursusBlock
                                key={i}
                                name={titel}
                                description={cursusPoints}
                                image={fotoVanDeCursus}
                                english={alleenInHetEngels}
                                to={titel}
                            />
                        // </AnimatedBox>
                    );
                }
            });
        } else {
            return data.allContentfulCursus.edges.map(({ node, next }, i) => {
                let name = '';
                let link = '';
                if (next !== null) {
                    if (node.contentful_id === next.contentful_id) {
                        name = next.titel;
                        link = node.titel;
                        const { cursusPoints, fotoVanDeCursus, alleenInHetEngels } = node;
                        return (
                            // <AnimatedBox count={i / 2}>
                                <CursusBlock
                                    key={i}
                                    name={name}
                                    description={cursusPoints}
                                    image={fotoVanDeCursus}
                                    english={alleenInHetEngels}
                                    to={link}
                                />
                            // </AnimatedBox>
                        );
                    } else {
                        return;
                    }
                }
            });
        }
    };
    return <Container>{returnBlocks()}</Container>;
};

export default injectIntl(CursusGrid);
