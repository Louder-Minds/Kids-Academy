import styled from "styled-components"
import { device } from "../../util/screensizes"

export const Container = styled.div`
  padding: 5%;
  color: black;

  h1 {
    font-size: 24px;
    margin-bottom: 1em;
    color: black;
    text-transform: uppercase;
  }

  div {
    margin-bottom: 2em;
    display: block;

    h2 {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 0.6em;
    }

    p {
      font-size: 14px;
      margin-bottom: 0.6em;
      line-height: 1.9;
      text-align: justify;
      hyphens: auto;
    }
  }

  img {
    max-width: 100%;
  }

  @media ${device.tablet} {
    padding: 5%;
    display: flex;
    align-items: center;

    div {
      margin-right: 5%;
    }

    img {
      width: 40%;
      display: inline-block;
    }
  }

  @media ${device.laptop} {
    padding: 2.5% 10%;
    padding-bottom: 0%;
    div {
      width: 60%;
      margin-right: 5%;
    }
    img {
      width: 40%;
    }
  }
`
