import styled from "styled-components";

export const Feedback = styled.section`
  background: rgb(255, 138, 0);
  background: linear-gradient(
    166deg,
    rgba(229, 46, 113, 1) 22%,
    rgba(255, 138, 0, 1) 100%
  );
  min-height: 50vh;
  text-align: center;
  padding: 50px 0px;

  h2 {
    font-size: 28px;
    margin-top: 50px;
    margin-bottom: 20px;
  }
`;

export const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 50px;
  min-height: 95%;
  border-radius: 0 0 50% 0;
  width: 95vw;
  margin: 0 auto;
`;

export const Card = styled.div`
  margin: 20px auto;
  display: inline-block;
  padding: 20px;
  min-width: 300px;
  max-width: 60vw;
  background-color: #001628;

  .stars {
    width: 20px;
    height: 20px;
    color: yellow;
    padding: 20px;
    display: inline;
  }

  p {
    color: white;
    font-size: 20px;
  }

  .customer {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }

  .client {
    width: 200px;
  }
`;
