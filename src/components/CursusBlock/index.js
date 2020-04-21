import React from "react"

import { Container } from "./style"

const CursusBlock = props => (
  <Container>
    <h3>{props.name}</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div>
      <img src={"https://source.unsplash.com/300x200"}></img>
    </div>
  </Container>
)

export default CursusBlock
