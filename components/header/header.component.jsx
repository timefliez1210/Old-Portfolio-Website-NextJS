import { Header, Main, Prim, Intro, Picture } from "./header.styles";

const HeaderSection = () => (
  <Header>
    <Main>
      <Prim />
      <div></div>
      <Intro>
        <Picture
          class="picture"
          src="../../src/assets/images/clemensfabig.JPG"
          alt="Clemens Fabig"
        />
        <h1>Hi my name is Clemens.</h1>
        <div class="animation">
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
