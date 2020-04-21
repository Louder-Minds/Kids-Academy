import React from "react"
import { Container } from "./style"
import CursusGrid from "../CursusGrid"

const CursusContainer = () => (
  <Container>
    <div className="content">
      <h1>CURSUSSEN KIDS ACADEMY</h1>
      <p>
        Bij Kids Academy is iedereen uit groep 5, 6, 7 & 8 van de basisschool
        welkom. Wij zijn er van overtuigd dat je in 12 weken alles kunt leren
        met goede begeleiding en hard werken. Elke cursus bestaat bij ons uit
        twee uur les per week op één van onze locaties en een half uur huiswerk
        per dag. Wil jij veel beter worden op school, ben je bereid om 12 weken
        hard te werken en wil je daarna nooit meer bijles in taal of rekenen?
        Geef je dan op voor een proefles van één van onze onderstaande cursussen
        om te kijken of Kids Acdemy iets voor je is, of doe mee met een
        cito-toets training.
      </p>
    </div>
    <CursusGrid />
    {/* <hr /> */}
  </Container>
)

export default CursusContainer
