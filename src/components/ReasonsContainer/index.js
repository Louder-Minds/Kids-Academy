import React from "react"

import { Container } from "./style"

import Redbutton from "../RedButton"

const uil = require("./uiltje-wit.png")

const ReasonsContainer = () => (
  <Container>
    <h1>5 REDENEN OM VOOR KIDS ACADEMY TE KIEZEN</h1>
    <hr />
    <ul>
      <li>
        <img src={uil} />
        Wij helpen uw kind met het wegwerken van achterstanden in taal en
        rekenen
      </li>
      <li>
        <img src={uil} />
        Kinderen presteren direct beter op school
      </li>
      <li>
        <img src={uil} />
        Wij bereiden uw kind grondig voor op school- en Cito-toetsen
      </li>
      <li>
        <img src={uil} />
        Overzichtelijke periode van 12 weken
      </li>
      <li>
        <img src={uil} />
        Schrijf je nu in en start binnen een week
      </li>
    </ul>
    <Redbutton full={false}>Schrijf je direct in</Redbutton>
  </Container>
)

export default ReasonsContainer
