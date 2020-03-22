import styled from "styled-components";

export const Navigation = styled.div`
  color: white;
  text-decoration: none;
  z-index: 40;
  width: 100vw;
  position: fixed;
  text-align: center;
  background-color: #001628;
  padding: 10px 0;




  a {
      text-decoration: none;
      color: white;
      &:hover {
        color: #ff8a00;
    }
  }

  .container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30px, 1fr));
    width: 60%;
    margin: 0 auto;

    @media (max-width: 1000px) {
        width: 100%;
        margin: 0;
    }

    .holder {
        padding: 5px;
        text-align: center;
        border-right: 1px solid grey;
    }
    .holder2 {
      padding: 5px;
      width: 20%
      text-align: center;
    }
}


`;
