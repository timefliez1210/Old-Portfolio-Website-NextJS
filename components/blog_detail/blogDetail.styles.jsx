import styled from "styled-components";

export const DetailSection = styled.section`
  padding-top: 50px;
  padding-bottom: 200px;
  text-align: center;
  min-height: 55vh;

  img {
    width: 50%;
    border-radius: 40px;
    box-shadow: 20px 20px 30px #ababab, -20px -20px 30px #ffffff;

    @media (max-width: 800px) {
      width: 80%;
      margin: 0 auto;
    }
  }

  p {
    text-align: left;
    font-size: 18px;
  }
`;

export const Card = styled.div`
  width: 90vw;
  margin: 0 auto;
  border-radius: 40px;
  box-shadow: 20px 20px 30px #ababab, -20px -20px 30px #ffffff;
  padding: 60px 5px;

  h1 {
    margin-top: 50px;
  }

  .preview {
    font-style: italic;
    margin-bottom: 30px;
    margin-top: 50px;
    text-align: left;
  }

  .content {
    text-align: left;
  }
`;
