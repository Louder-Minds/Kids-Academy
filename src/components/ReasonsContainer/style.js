import styled from "styled-components"

import { device } from "../../util/screensizes"

export const Container = styled.div`
  padding: 10% 5%;
  background-color: #37375c;
  width: 100%;
  height: 50%;

  color: white;

  box-sizing: border-box;

  hr {
    background: white;
    height: 2px;
  }

  h1 {
    margin-bottom: 10px;
    font-size: 20px;
    color: white;
    font-family: "Poppins";
    font-weight: 600;
  }

  ul {
    margin: 0;
    li {
      display: flex;
      align-items: center;
      font-size: 16px;
      margin-bottom: 30px;
      font-family: "Poppins";
      font-weight: 200;

      img {
        margin-right: 15px;
        width: 15px;
      }
    }
  }

  button {
    font-family: "Poppins";
    font-weight: 500;
    text-transform: uppercase;
    width: 100%;
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
    height: 100%;
    min-height: 90vh;
    max-height: 700px;
    max-width: 50%;

    padding: 5%;

    ul li {
      margin-bottom: 30px;
    }
  }
`
