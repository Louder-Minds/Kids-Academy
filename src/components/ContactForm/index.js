import React from 'react';
import { Container } from './style';
import { useStaticQuery, graphql } from 'gatsby';
import ReCAPTCHA from "react-google-recaptcha";

const klassen = ['Groep 5', 'Groep6', 'Groep7', 'Groep8', 'Middelbare school'];
const ContactForm = () => {
    const data = useStaticQuery(graphql`
        query interreses {
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
            <h1>Kom in contact</h1>
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
                    <input type="text" name="first_name_child" />
                    <label>Achternaam kind*</label>
                    <input type="text\" name="last_name_child" />
                </div>
                    <hr />

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

                <div className="naamverzorger">
                    <label>Voornaam ouder/verzorger*</label>
                    <input type="text" name="first_name_parent"/>
                    <label>Achternaam ouder/verzorger*</label>
                    <input type="text" name="last_name_parent"/>
                    <label>Telefoon*</label>
                    <input type="tel" name="telephone number"/>
                    <label>Email adres*</label>
                    <input type="email" name="email" />
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
                                />
                                <label for={`${titel}`}>{titel}</label>
                                <br />
                            </>
                        );
                    })}
                </div>
                    <hr />

                <div className="info">
                    <input
                        type="checkbox"
                        name="kennismakingsgesprek"
                    />
                    <label for="kennismakingsgesprek">
                        Ik wil graag een kennismakingsgesprek plannen
                    </label>
                    <br />

                    <input type="checkbox" name="ander-vraag" value="Ja" />
                    <label for="andere-vraag">Ik heb een andere vraag</label>
                    <br />
                    <hr />

                    <div className="textmessage">
                        <label>Vraag:</label>
                        <textarea name="message" id="message" rows="5" />
                    </div>
                    <button type="submit">Verstuur</button>
                    <input type="reset" value="Reset formulier" />
                </div>
                {/* <ReCAPTCHA sitekey="YOUR_SITE_KEY" /> */}
            </form>
        </Container>
    );
};

export default ContactForm;
