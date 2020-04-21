import styled from "styled-components"

import speelplaats from "./speelplaats.jpeg"

import { device } from "../../util/screensizes"

export const Container = styled.div`
  width: 100%;
  height: 300px;

  padding: 10% 5%;
  margin: 0;

  background-image: url(${speelplaats});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    text-transform: uppercase;
    font-family: "Poppins", sans-serif;
    font-size: 30px;
    font-weight: 600;
    line-height: 1;
    color: white;
    margin-bottom: 10%;
  }

  button {
    text-transform: uppercase;
    font-family: "Poppins";
    font-weight: 500;
    font-size: 16px;
    width: 200px;
    height: 50px;
    background-color: red;
    border: none;
    color: white;
    background: rgb(202, 28, 28);
    border-radius: 2px;
    /* background: linear-gradient(
      90deg,
      rgba(208, 0, 0, 1) 0%,
      rgba(111, 0, 0, 1) 100%
    ); */
  }

  @media ${device.tablet} {
    min-height: 90vh;
    height: 100%;
    max-height: 90vh;

    max-width: 50%;
    padding: 5%;

    h1 {
      font-size: 2.2em;
    }
  }
`
