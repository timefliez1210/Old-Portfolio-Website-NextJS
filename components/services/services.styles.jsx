import styled from "styled-components";

export const Services = styled.section`
  text-align: center;
  padding: 50px 0;

  h2 {
    font-size: 28px;
    margin-top: 50px;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 24px;
    margin: 20px;
  }

  .privacy {
    text-align: left;
    padding: 40px;
  }
`;

export const Card = styled.div`
  margin: 20px auto;
  display: inline-block;
  padding: 20px;
  border-radius: 38px;
  background: #ffffff;
  box-shadow: 27px 27px 54px #c7c7c7, -27px -27px 54px #ffffff;
  border: none;
  min-width: 250px;
  max-width: 60vw;

  h3 {
    text-align: center;
  }

  h4 {
    text-align: center;
  }

  p {
    font-size: 20px;
    text-align: left;
    margin: 10px auto;
  }
`;

export const Main = styled.div`
  text-align: left;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 50px;
  margin: 0 auto;
  background-color: white;
`;
