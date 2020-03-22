import styled from "styled-components";

export const Contact = styled.section`
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
`;
export const Main = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 0;
  margin: 0 auto;
  background-color: white;
`;

export const Card = styled.div`
margin: 20px auto;
display: inline-block;
text-align: left;
padding: 20px;
min-width: 300px;
max-width: 60vw;
border-radius: 38px;
background: #ffffff;
box-shadow: 27px 27px 54px #c7c7c7, -27px -27px 54px #ffffff;
border: none;

h3 {
  text-align: center;
}

p {
  font-size: 20px;
  text-align: left;
  margin: 10px auto;
}
.form-input-label {
  font-size: 25px;
}

.form-input {
  float: right;
  margin: 0;
  height: 20px;
  width: 200px;
  border-radius: 38px;
  background: #ffffff;
  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 1),
    inset 2px 2px 6px rgba(0, 0, 0, 0.1);
  height: 20px;
  padding: 5px;
}
textarea {
  float: right;
  margin: 0;
  width: 80%;
  height: 300px;
  border-radius: 38px;
  background: #ffffff;
  box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 1),
    inset 2px 2px 6px rgba(0, 0, 0, 0.1);
  padding: 30px;
}
}
}
`;
