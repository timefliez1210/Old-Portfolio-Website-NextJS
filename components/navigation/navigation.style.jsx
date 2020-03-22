import styled from "styled-components";

export const Navigation = styled.div`
  postition: sticky;
  display: inline-flex;
  padding: 20px;

  text-align: center;
  color: white;
  background-color: black;
  z-index: 40;
  width: 100vw;

  ul {
    display: inline-flex;
    position: fixed;
    top: 0px;
    text-align: center;
    width: 100%;
    padding: 10px;

    li {
      display: inline-flex;
      text-align: center;
      width: 100%;

      a {
        text-decoration: none;
      }
    }
  }
`;
