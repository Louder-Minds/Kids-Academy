import React from 'react';
import { Container } from './style';
import { useStaticQuery, graphql } from 'gatsby';

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
                method="post"
                name="contact"
                netlify-honeypot="bot-field"
                data-netlify="true"
            >
                <div className="naamkind">
                    <label>Voornaam kind*</label>
                    <input type="text" name="name" id="name" />
                    <label>Achternaam kind*</label>
                    <input type="email" name="email" id="email" />
                </div>
                    <hr />

                <div className="klas">
                    <h3>Mijn kind zit in*</h3>
                    {klassen.map((item) => (
                        <>
                            <input type="radio" name="groep" value={``} />
                            <label for={`${item}`}>{item}</label>
                            <br />
                        </>
                    ))}
                </div>
                    <hr />

                <div className="naamverzorger">
                    <input type="hidden" name="bot-field" />
                    <label>Voornaam ouder/verzorger*</label>
                    <input type="text" name="name" id="name" />
                    <label>Achternaam ouder/verzorger*</label>
                    <input type="email" name="email" id="email" />
                    <label>Telefoon*</label>
                    <input type="email" name="email" id="email" />
                    <label>email adres*</label>
                    <input type="email" name="email" id="email" />
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
                                    value={`${titel}`}
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
                        value="Ja"
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
            </form>
        </Container>
    );
};

export default ContactForm;
