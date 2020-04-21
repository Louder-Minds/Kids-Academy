import React from "react"
import { Button } from "./style"

const RedButton = props => (
  <Button id={props.id} full={props.full}>
    {props.children}
  </Button>
)

export default RedButton
