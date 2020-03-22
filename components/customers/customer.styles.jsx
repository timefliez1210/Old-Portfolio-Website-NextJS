import styled from "styled-components";

export const Customers = styled.section`
  width: 100vw;
  overflow-x: hidden;
  background-color: #001628;
  text-align: center;
  padding: 50px 0;
  text-align: center;

  h2 {
    color: white;
    font-size: 28px;
    margin-top: 50px;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 24px;
  }

  p {
    font-size: 20px;
    text-align: left;
    margin: 10px 10px;
    padding: 10px;
  }
`;

export const Display = styled.div`
  width: 80vw;
  margin: 5vh auto;
  color: white;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  padding: 20px;
  border-radius: 40px;
  background: #001628;
  box-shadow: 5px 5px 10px #000910, -5px -5px 10px #002340;
  position: relative;
  z-index: 3;
  .display-img {
    width: 100%;
    align-self: center;
    z-index: 3;
    border-radius: 40px;
    box-shadow: 5px 5px 10px #000910, -5px -5px 10px #002340;
  }
`;

export const Prim = styled.div`
  height: 400px;
  width: 400px;
  position: absolute;
  left: -300px;
  top: -120px;
  border: 2px solid #ff8a00;
  border-radius: 50%;
  z-index: 1;
`;

export const Cube = styled.div`
  height: 200px;
  width: 200px;
  background: rgb(255, 138, 0);
  background: linear-gradient(
    166deg,
    rgba(229, 46, 113, 1) 40%,
    rgba(255, 138, 0, 1) 100%
  );
  position: absolute;
  top: -100px;
  right: -150px;
  transform: rotate(70deg);
`;

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-top: 100px solid #e52e71;
  border-left: 100px solid transparent;
  position: absolute;
  top: -90px;
  right: -5px;
  transform: rotate(30deg);
`;

//   .display-img {
//     width: 100%;
//     align-self: center;
//     z-index: 3;
//     border-radius: 40px;
//     box-shadow: 5px 5px 10px #000910, -5px -5px 10px #002340;
//   }
