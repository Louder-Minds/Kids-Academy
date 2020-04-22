import styled from "styled-components"

import { device } from "../../util/screensizes"

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* grid-template-rows: repeat(3, 1fr); */
  grid-column-gap: 10px;
  grid-row-gap: 30px;
  justify-items: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 5%;
    grid-row-gap: 30px;
  }

  @media ${device.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`
