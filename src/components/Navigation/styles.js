import styled from "styled-components"

import { device } from "../../util/screensizes"

export const NavbarToggle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 30px;
  width: 30px;
  position: relative;

  div {
    background: white;
    width: 100%;
    height: 2px;
    transition: transform 0.2s ease-in-out;
    border-radius: 10px;
  }

  #one {
    transform: ${props =>
      props.isToggled ? "translateY(5px) rotate(-45deg)" : "none"};
  }

  #two {
    transform: ${props =>
      props.isToggled ? "translateY(-5px) rotate(45deg)" : "none"};
  }

  @media ${device.tablet} {
    display: none;
  }
`
