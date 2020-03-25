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
        <div className="animation">
          I <span id="text"></span>
        </div>
        <br className="hide-mobile" />
        <br className="hide-mobile" />
        <br className="hide-mobile" />
        <br className="hide-mobile" />
      </Intro>
      <div></div>
    </Main>
    <script
      dangerouslySetInnerHTML={{
        __html: `var _CONTENT = [
            "create websites",
            "create web and mobile applications",
            "love everything about code",
            "solve problems."
          ];
    

          var _PART = 0;
    

          var _PART_INDEX = 0;
    

          var _INTERVAL_VAL;
    

          var _ELEMENT = document.querySelector("#text");
    

          function Type() {
            var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
            _ELEMENT.innerHTML = text;
            _PART_INDEX++;
    

            if (text === _CONTENT[_PART]) {
              clearInterval(_INTERVAL_VAL);
              setTimeout(function() {
                _INTERVAL_VAL = setInterval(Delete, 50);
              }, 1000);
            }
          }
    

          function Delete() {
            var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
            _ELEMENT.innerHTML = text;
            _PART_INDEX--;
    

            if (text === "") {
              clearInterval(_INTERVAL_VAL);
    

              if (_PART == _CONTENT.length - 1) _PART = 0;
              else _PART++;
              _PART_INDEX = 0;
    

              setTimeout(function() {
                _INTERVAL_VAL = setInterval(Type, 100);
              }, 200);
            }
          }
    

          _INTERVAL_VAL = setInterval(Type, 100);`
      }}
    />
  </Header>
);

export default HeaderSection;

{
  /* <span id="text"></span> */
}
