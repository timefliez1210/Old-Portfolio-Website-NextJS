import { Header, Main, Prim, Intro } from "./header.styles";

const HeaderSection = () => (
  <Header>
    <Main>
      <Prim className="hide-mobile" />
      <div></div>
      <Intro>
        <img className="picture" src="/clemensfabig.jpg" alt="Clemens Fabig" />
        <h1>Hi my name is Clemens.</h1>
        <div className="animation">
          I <span id="text"></span>
        </div>
        <br />
        <br />
        <br />
        <br />
      </Intro>
      <div></div>
    </Main>
  </Header>
);

export default HeaderSection;
