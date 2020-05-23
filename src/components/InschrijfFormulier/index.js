import React from 'react';
import { Container } from './style';
import { useStaticQuery, graphql } from 'gatsby';
import Title from '../Typography/Title';
const klassen = [
    'Groep 5',
    'Groep 6',
    'Groep 7',
    'Groep 8',
    'Voortgezet onderwijs',
];
const locaties = ['Amsterdam', 'Haarlem', 'Laren'];
const prijzen = [
    'Eenmalige betaling 12-weekse cursus (€)',
    'Betaling in drie termijnen 12-weekse cursus (€ 3x)',
    'Eenmalige betaling Cito-training of Summerschool (€)',
];

const InschrijfFormulier = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulCursus {
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
            <Title type="h2">Inschrijf formulier</Title>
            <form
                method="POST"
                name="inschrijven"
                netlify-honeypot="bot-field"
                data-netlify="true"
            >
                <input type="hidden" name="form-name" value="contact" />
                <div className="naamkind">
                    <div>
                        <label>Voornaam kind*</label>
                        <input type="text" name="first_name_child" required />
                    </div>
                    <div>
                        <label>Achternaam kind*</label>
                        <input type="text\" name="last_name_child" required />
                    </div>
                </div>
                <hr />

                <div className="naamverzorger">
                    <div>
                        <label>Voornaam ouder/verzorger*</label>
                        <input type="text" name="first_name_parent" required />
                    </div>
                    <div>
                        <label>Achternaam ouder/verzorger*</label>
                        <input type="text" name="last_name_parent" required />
                    </div>
                    <div>
                        <label>Telefoon*</label>
                        <input type="tel" name="telephone number" required />
                    </div>
                    <div>
                        <label>E-mail adres*</label>
                        <input type="email" name="email" required />
                    </div>
                </div>
                <hr />

                <div className="klas">
                    <h3>Mijn kind zit in*</h3>
                    <select name="klas" required>
                        {klassen.map((item) => (
                            <>
                                <option
                                    type="radio"
                                    name="groep"
                                    value={`${item}`}
                                >
                                    {item}
                                </option>
                                <br />
                            </>
                        ))}
                    </select>
                </div>
                <hr />

                <div className="interesse">
                    <h3>Ik schrijf mijn kind in voor*</h3>
                    {data.allContentfulCursus.edges.map(({ node }, j) => {
                        const { titel } = node;
                        return (
                            <div>
                                <input
                                    type="checkbox"
                                    name={`${titel}`}
                                    value="✓"
                                />
                                <label for={`${titel}`}>{titel}</label>
                                <br />
                            </div>
                        );
                    })}
                </div>
                <hr />

                <div className="locatie">
                    <h3>Gewenste locatie*</h3>
                    <select required name="locatie">
                        {locaties.map((item) => (
                            <>
                                <option
                                    type="radio"
                                    name="locatie"
                                    value={`${item}`}
                                >
                                    {item}
                                </option>
                                <br />
                            </>
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
                    <label>Opmerking/Vraag:</label>
                    <textarea name="message" id="message" rows="5" />
                </div>
                {/* <hr /> */}
                <button type="submit">Verstuur</button>
                {/* <ReCAPTCHA sitekey="YOUR_SITE_KEY" />*/}
            </form>
        </Container>
    );
};

export default InschrijfFormulier;
