import styled from "styled-components"

import { device } from "../../util/screensizes"

export const Container = styled.div`
  padding: 5%;
  font-family: "Poppins";
  margin-bottom: 5%;
  background-color: rgb(0, 0, 0, 0.1);

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
  }

  hr {
    height: 2px;
    background-color: rgba(0, 0, 0, 0.85);
    margin: 0;
  }
`
