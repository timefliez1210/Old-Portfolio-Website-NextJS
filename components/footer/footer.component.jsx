import { Footer, Cube, Prim } from "./footer.styles";
import Link from "next/link";

const FooterSection = () => (
  <Footer>
    <Link href="/privacy">
      <a>Privacy Policy & Legal Stuff</a>
    </Link>
    <Prim />
    <p>&copy; by Clemens Fabig, 2020</p>
    <Cube />
    <p>Made with &#10084; by Clemens Fabigss</p>
  </Footer>
);

export default FooterSection;
