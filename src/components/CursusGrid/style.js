import styled from "styled-components"

import { device } from "../../util/screensizes"

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 5%;
  margin-bottom: 10%;

  @media ${device.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    margin-bottom: 5%;
  }
`
