import styled from "styled-components"
import { device } from "../../util/screensizes"

export const Container = styled.div`
  padding: 5%;
  font-family: "Poppins";
  color: black;

  h1 {
    font-size: 34px;
    margin-bottom: 1em;
    color: black;
  }

  h2 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 1em;
  }

  p {
    font-size: 14px;
    margin-bottom: 2em;
    line-height: 1.9;
  }

  img {
    max-width: 100%;
  }

  @media ${device.tablet} {
    padding: 5%;
    display: flex;
    align-items: center;

    div {
      width: 50%;
      display: inline-block;
    }

    img {
      width: 50%;
      display: inline-block;
    }
  }

  @media ${device.laptop} {
    padding: 10%;
    div {
      width: 60%;
      margin-right: 5%;
    }
    img {
      width: 40%;
    }
  }
`
