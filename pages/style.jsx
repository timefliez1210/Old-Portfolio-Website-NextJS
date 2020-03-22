import styled from "styled-components";

export const Layout = styled.div`
  button {
    text-decoration: none;
    text-align: center;
    font-size: 20px;
    color: black;
    position: relative;
    z-index: 10;
    width: 200px;
    height: 60px;
    border: none;
    border-radius: 20px;
    margin-top: 50px;
    padding: 10px 30px;
    background: rgb(255, 138, 0);
    background: linear-gradient(
      166deg,
      rgba(255, 138, 0, 1) 21%,
      rgba(229, 46, 113, 1) 100%
    );

    &:hover {
      background: rgb(255, 138, 0);
      background: linear-gradient(
        166deg,
        rgba(255, 138, 0, 1) 0%,
        rgba(229, 46, 113, 1) 100%
      );
    }
  }

  .button {
    text-decoration: none;
    font-size: 20px;
    color: black;
    width: 400px;
    height: 120px;
    border-radius: 20px;
    margin-top: 50px;
    padding: 15px 50px;
    background: rgb(255, 138, 0);
    background: linear-gradient(
      166deg,
      rgba(255, 138, 0, 1) 21%,
      rgba(229, 46, 113, 1) 100%
    );

    &:hover {
      background: rgb(255, 138, 0);
      background: linear-gradient(
        166deg,
        rgba(255, 138, 0, 1) 0%,
        rgba(229, 46, 113, 1) 100%
      );
    }
  }

  .underline-small {
    width: 50px;
    height: 3px;
    background-color: #001628;
    margin: 0 auto;
  }

  .underline-orange {
    width: 120px;
    height: 5px;
    background-color: #ff8a00;
    margin: 0 auto;
  }

  .underline-small-orange {
    width: 50px;
    height: 3px;
    background-color: #ff8a00;
    margin: 0 auto;
  }

  .underline {
    width: 120px;
    height: 5px;
    background-color: black;
    margin: 0 auto;
  }

  .orangeline {
    height: 30px;
    width: 100vw;
    margin: 50px 0;
    background: rgb(255, 138, 0);
    background: linear-gradient(
      166deg,
      rgba(229, 46, 113, 1) 10%,
      rgba(255, 138, 0, 1) 50%
    );
  }
`;

// .client {
//     width: 200px;
//   }

//   .hire {
//     align-items: center;
//     width: 300px;
//     margin: 0 auto;
//     position: relative;
//     z-index: 10;
//   }

//   .whaticanbuild {
//     position: relative;
//   }

//   .kontakt {
//     position: sticky;
//     top: 5px;
//     right: 50px;
//     width: 200px;
//     height: 100px;
//   }

//   .animation {
//     font-size: 24px;
//   }

//   .card {
//     margin: 20px auto;
//     display: inline-block;
//     padding: 20px;
//     min-width: 250px;
//     max-width: 80vw;

//     h3 {
//       text-align: center;
//     }

//     p {
//       font-size: 20px;
//       text-align: center;
//       margin: 10px auto;
//     }

//     .button {
//       text-decoration: none;
//       font-size: 20px;
//       color: black;
//       width: 300px;
//       height: 120px;
//       border-radius: 20px;
//       margin-top: 50px;
//       padding: 15px 50px;
//       background: rgb(255, 138, 0);
//       background: linear-gradient(
//         166deg,
//         rgba(255, 138, 0, 1) 21%,
//         rgba(229, 46, 113, 1) 100%
//       );

//       &:hover {
//         background: rgb(255, 138, 0);
//         background: linear-gradient(
//           166deg,
//           rgba(255, 138, 0, 1) 5%,
//           rgba(229, 46, 113, 1) 100%
//         );
//       }
//     }
//   }
