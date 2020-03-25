import styled from "styled-components";

export const Footer = styled.section`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20vw, 1fr));
  column-gap: 20em;
  color: black;
  background-color: #001628;
  position: relative;
  a {
    text-decoration: none;
    color: white;
    margin: 20px auto;
  }

  p {
    text-decoration: none;
    color: white;
    margin: 20px auto;
  }
`;

export const Cube = styled.div`
  height: 100px;
  width: 100px;
  background: rgb(255, 138, 0);
  background: linear-gradient(
    45deg,
    rgba(229, 46, 113, 1) 40%,
    rgba(255, 138, 0, 1) 100%
  );
  position: absolute;
  top: -150px;

  transform: rotate(70deg);

  @media (max-width: 800px) {
    top: -100px;
  }
`;

export const Prim = styled.div`
  height: 200px;
  width: 200px;
  position: absolute;
  right: -60px;
  top: -500px;
  border: 2px solid #ff8a00;
  border-radius: 50%;

  @media (max-width: 800px) {
    top: -200px;
  }
`;
