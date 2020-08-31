import { Footer, Cube, Prim } from "./footer.styles";
import Link from "next/link";

const FooterSection = () => (
  <Footer>
    <Link href="">
      <a>Privacy Policy & Legal Stuff</a>
    </Link>
    <Prim />

    <Cube />
    <p>Made with &#10084; by Clemens Fabig</p>
  </Footer>
);

export default FooterSection;
