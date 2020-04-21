import styled from "styled-components"

export const Container = styled.div`
  font-family: "Poppins";

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 10px;
  }

  p {
    font-size: 12px;
    line-height: 1.6;
    margin-bottom: 10px;
  }

  img {
    width: 100%;
    transition: all 0.25s ease-in;
  }

  :hover {
    img {
      box-shadow: 0px 47px 68px 0px rgba(214, 214, 214, 0.5);
    }
    cursor: pointer;
  }
`
