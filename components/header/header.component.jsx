import { Header, Main, Prim, Intro } from "./header.styles";

const HeaderSection = () => (
  <Header>
    <Main>
      <Prim />
      <div></div>
      <Intro>
        <br />
        <br />
        <br />
        <img className="picture" src="/clemensfabig.jpg" alt="Clemens Fabig" />
        <h1>Hi my name is Clemens</h1>
        <div className="animation">and I love everything about code.</div>
        <br className="hide-mobile" />
        <br className="hide-mobile" />
        <br className="hide-mobile" />
        <br className="hide-mobile" />
      </Intro>
      <div></div>
    </Main>
  </Header>
);

export default HeaderSection;

{
  /* <span id="text"></span> */
}
