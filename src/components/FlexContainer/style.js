import styled from "styled-components"

import { device } from "../../util/screensizes"

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.tablet} {
    flex-direction: row;
  }
`
