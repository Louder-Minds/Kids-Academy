import React from 'react';
import { Container } from './style';
import { useStaticQuery, graphql } from 'gatsby';
import Title from '../Typography/Title';
import { FormattedMessage } from 'gatsby-plugin-intl';

const klassen = ['Groep 5', 'Groep 6', 'Groep 7', 'Groep 8', 'Voortgezet onderwijs'];
const locaties = ['Amsterdam', 'Haarlem', 'Laren'];

const InschrijfFormulier = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulCursus(filter: { node_locale: { eq: "nl" } }) {
                edges {
                    node {
                        titel
                    }
                }
            }
        }
    `);

    return (
        <Container>
            <Title type="h2">
                <FormattedMessage id="inschrijf-formulier"></FormattedMessage>
            </Title>
            <form
                method="POST"
                name="inschrijven"
                netlify-honeypot="bot-field"
                data-netlify="true"
                action="/success"
            >
                <input type="hidden" name="form-name" value="inschrijven" />
                <div className="naamkind">
                    <div>
                        <label htmlFor="first_name_child">Voornaam kind*</label>
                        <input type="text" name="first_name_child" id="first_name_child" required />
                    </div>
                    <div>
                        <label htmlFor="last_name_child">Achternaam kind*</label>
                        <input type="text\" name="last_name_child" id="last_name_child" required />
                    </div>
                </div>
                <hr />

                <div className="naamverzorger">
                    <div>
                        <label htmlFor="first_name_parent">Voornaam ouder/verzorger*</label>
                        <input
                            type="text"
                            name="first_name_parent"
                            id="first_name_parent"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="last_name_parent">Achternaam ouder/verzorger*</label>
                        <input type="text" name="last_name_parent" id="last_name_parent" required />
                    </div>
                    <div>
                        <label htmlFor="telephone_number">Telefoon*</label>
                        <input type="tel" name="telephone_number" id="telephone_number" required />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail adres*</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                </div>
                <hr />

                <div className="klas">
                    <h3>Mijn kind zit in*</h3>
                    <select name="klas" required>
                        {klassen.map((item, j) => (
                            <option type="radio" name="groep" value={`${item}`} key={j}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                <hr />

                <div className="interesse">
                    <h3>Ik schrijf mijn kind in voor*</h3>
                    {data.allContentfulCursus.edges.map(({ node }, j) => {
                        const { titel } = node;
                        return (
                            <div key={j}>
                                <input type="checkbox" name={`${titel}`} value="✓" />
                                <label htmlFor={`${titel}`}>{titel}</label>
                            </div>
                        );
                    })}
                </div>
                <hr />

                <div className="locatie">
                    <h3>Gewenste locatie*</h3>
                    <select required name="locatie">
                        {locaties.map((item, j) => (
                            <option type="radio" name="locatie" value={`${item}`} key={j}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                <hr />

                {/* <div className="betaling">
                    <h3>Betaling*</h3>
                    {prijzen.map((item) => (
                        <>
                            <div>
                                <input
                                    type="radio"
                                    name="betaling"
                                    value={`${item}`}
                                    required
                                />
                                <label for={`${item}`}>{item}</label>
                            </div>
                        </>
                    ))}
                </div>
                <hr /> */}

                <div className="textmessage">
                    <label htmlFor="message">Opmerking/Vraag:</label>
                    <textarea name="message" id="message" rows="5" />
                </div>
                <hr />

                <div className="interesse">
                    <div>
                        <input type="checkbox" name="voorwaarden`" value="✓" />
                        <label htmlFor="voorwaarden">
                            Ik ga akkoord met de{' '}
                            <a href="/voorwaarden" target="_" style={{ color: '#14b09c' }}>
                                algemene voorwaarden
                            </a>
                        </label>
                    </div>
                </div>
                <button type="submit">
                    <FormattedMessage id="verstuur" />
                </button>
                {/* <ReCAPTCHA sitekey="YOUR_SITE_KEY" />*/}
            </form>
        </Container>
    );
};

export default InschrijfFormulier;
