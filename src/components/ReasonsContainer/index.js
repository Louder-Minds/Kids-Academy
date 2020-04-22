import React from "react"

import { Container } from "./style"

import Redbutton from "../RedButton"

import uil from "./uiltje-wit.png"

const ReasonsContainer = () => (
  <Container>
    <h1>5 REDENEN OM VOOR KIDS ACADEMY TE KIEZEN</h1>
    <hr />
    <ul>
      <li>
        <img src={uil} alt="uil-logo" />
        Wij helpen uw kind met het wegwerken van achterstanden in taal en
        rekenen
      </li>
      <li>
        <img src={uil} alt="uil-logo" />
        Kinderen presteren direct beter op school
      </li>
      <li>
        <img src={uil} alt="uil-logo" />
        Wij bereiden uw kind grondig voor op school- en Cito-toetsen
      </li>
      <li>
        <img src={uil} alt="uil-logo" />
        Overzichtelijke periode van 12 weken
      </li>
      <li>
        <img src={uil} alt="uil-logo" />
        Schrijf je nu in en start binnen een week
      </li>
    </ul>
    <Redbutton full={false}>Schrijf je direct in</Redbutton>
  </Container>
)

export default ReasonsContainer
