import React, { useEffect } from 'react';
import { Container } from './style';
import CursusBlock from '../CursusBlock';
import { useStaticQuery, graphql } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedBox = ({ keyThing, children, count }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    const variants = {
        visible: () => ({
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 30,
                delay: count * 0.1,
            },
        }),
        hidden: { opacity: 0, y: '75px', scale: 0.985 },
    };

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={variants}
            style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            {children}
        </motion.div>
    );
};

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

    const returnBlocks = () => {
        if (intl.locale === 'nl') {
            return data.allContentfulCursus.edges.map(({ node }, j) => {
                let coursename, linkname;
                if (node.node_locale === 'nl') {
                    coursename = node.titel;
                    linkname = node.titel;
                    const { titel, cursusPoints, fotoVanDeCursus, alleenInHetEngels } = node;

                    return (
                        <AnimatedBox count={j / 2}>
                            <CursusBlock
                                key={j}
                                name={titel}
                                description={cursusPoints}
                                image={fotoVanDeCursus}
                                english={alleenInHetEngels}
                                to={titel}
                            />
                        </AnimatedBox>
                    );
                }
            });
        } else {
            return data.allContentfulCursus.edges.map(({ node, next }, j) => {
                let name = 'a';
                let link = 'a';
                if (next !== null) {
                    if (node.contentful_id === next.contentful_id) {
                        name = next.titel;
                        link = node.titel;
                        const { titel, cursusPoints, fotoVanDeCursus, alleenInHetEngels } = node;
                        return (
                            <AnimatedBox count={j / 2}>
                                <CursusBlock
                                    key={j}
                                    name={name}
                                    to={link}
                                    description={cursusPoints}
                                    image={fotoVanDeCursus}
                                    english={alleenInHetEngels}
                                />
                            </AnimatedBox>
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
