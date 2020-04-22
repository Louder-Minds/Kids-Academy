import styled from "styled-components"

import { device } from "../../util/screensizes"

export const Container = styled.div`
  padding: 10% 5%;
  position: relative;

  .content {
    h1 {
      font-size: 24px;
    }

    p {
      font-size: 14px;
      line-height: 1.9;
      margin-bottom: 10%;
    }
  }

  @media ${device.tablet} {
    padding: 5%;
    margin-bottom: 0;

    .content {
      p {
        margin-bottom: 5%;
      }
    }
  }

  @media ${device.laptop} {
    padding: 2.5% 10%;
    p {
      max-width: 750px;
      margin-bottom: 5% !important;
    }
  }
`
