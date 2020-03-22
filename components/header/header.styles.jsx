import styled from "styled-components";

export const Header = styled.section`
  height: 55vh;
  width: 100vw;
  background: rgb(255, 138, 0);
  background: linear-gradient(
    166deg,
    rgba(255, 138, 0, 1) 21%,
    rgba(229, 46, 113, 1) 100%
  );
  overflow: hidden;
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
  grid-gap: 0;
  min-height: 95%;
  width: 100vw;
  background-color: #001628;
  border-radius: 0 0 50% 0;
`;

export const Prim = styled.div`
  height: 400px;
  width: 400px;
  position: absolute;
  left: -60px;
  top: -120px;
  border: 2px solid #ff8a00;
  border-radius: 50%;
`;

export const Intro = styled.div`
  color: white;
  padding: 40px;
  border-bottom: 2px solid #ff8a00;
  border-right: 2px solid #ff8a00;
  border-top: 2px solid #001628;
  border-radius: 50%;
  align-self: center;
`;

export const Picture = styled.div`
  width: 200px;
  border-radius: 50%;
`;

//         h1 {
//           font-size: 38px;
//           color: white;
