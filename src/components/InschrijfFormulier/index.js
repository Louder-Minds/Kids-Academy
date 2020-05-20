import React from 'react';
import { Container } from './style';
import { useStaticQuery, graphql } from 'gatsby';
import Title from '../Typography/Title';
const klassen = ['Groep 5', 'Groep6', 'Groep7', 'Groep8', 'Middelbare school'];
const locaties = ['Amsterdam', 'Haarlem', 'Laren'];
const prijzen = [
    'Eenmalige betaling 12-weekse cursus ($)',
    'Betaling in drie termijnen 12-weekse cursus ($3x)',
    'Eenmalige betaling Cito-training of Summerschool ($)',
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
            <Title type="h2">Schrijf je in voor KidsAcademy</Title>
            <form
                method="POST"
                name="contact"
                netlify-honeypot="bot-field"
                data-netlify="true"
                action="/"
            >
                <input type="hidden" name="form-name" value="contact" />
                <div className="naamkind">
                    <label>Voornaam kind*</label>
                    <input type="text" name="first_name_child" required />
                    <label>Achternaam kind*</label>
                    <input type="text\" name="last_name_child" required/>
                </div>
                <hr />

                <div className="naamverzorger">
                    <label>Voornaam ouder/verzorger*</label>
                    <input type="text" name="first_name_parent" required/>
                    <label>Achternaam ouder/verzorger*</label>
                    <input type="text" name="last_name_parent" required/>
                    <label>Telefoon*</label>
                    <input type="tel" name="telephone number" required/>
                    <label>Email adres*</label>
                    <input type="email" name="email" required/>
                </div>
                <hr/>

                <div className="klas">
                    <h3>Mijn kind zit in*</h3>
                    {klassen.map((item) => (
                        <>
                            <input type="radio" name="groep" value={`${item}`} />
                            <label for={`${item}`}>{item}</label>
                            <br />
                        </>
                    ))}
                </div>
                    <hr />


                <div className="interesse">
                    <h3>Ik heb interesse in</h3>
                    {data.allContentfulCursus.edges.map(({ node }, j) => {
                        const { titel } = node;
                        return (
                            <>
                                <input
                                    type="checkbox"
                                    name={`${titel}`}
                                    value="✓"
                                />
                                <label for={`${titel}`}>{titel}</label>
                                <br />
                            </>
                        );
                    })}
                </div>
                <hr />

                <div className="locatie">
                    <h3>Gewenste locatie*</h3>
                    {locaties.map((item) => (
                        <>
                            <input
                                type="radio"
                                name="locatie"
                                value={`${item}`}
                                required
                            />
                            <label for={`${item}`}>{item}</label>
                            <br />
                        </>
                    ))}
                </div>

                <hr />


                <div className="betaling">
                    <h3>Betaling*</h3>
                    {prijzen.map((item) => (
                        <>
                            <input
                                type="radio"
                                name="betaling"
                                value={`${item}`}
                                required
                            />
                            <label for={`${item}`}>{item}</label>
                            <br />
                        </>
                    ))}
                </div>
                <hr />

                <div className="dagdeel">
                    <label>Voorkeur dag/tijd</label>
                    <input type="text" name="dagdeel" required/>
                </div>
                <input type="checkbox" name="andere-vraag" value="Ja" />
                <label for="andere-vraag">Ik heb een andere vraag</label>
                <br />
                <hr />

                <div className="textmessage">
                    <label>Vraag:</label>
                    <textarea name="message" id="message" rows="5" />
                </div>
                <button type="submit">Verstuur</button>
                <input type="reset" value="Reset formulier" />
                {/* <ReCAPTCHA sitekey="YOUR_SITE_KEY" />*/}
            </form>
        </Container>
    );
};

export default InschrijfFormulier;
