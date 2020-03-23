import {
  FaStoreAlt,
  FaRegHeart,
  FaProjectDiagram,
  FaNewspaper
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import Link from "next/link";

import { Navigation } from "./navigation.style";

const Navbar = () => (
  <Navigation>
    <div className="container">
      <Link href="/">
        <a>
          <div className="holder 1">
            <FaStoreAlt />
            <br />
            Home
          </div>{" "}
        </a>
      </Link>

      <Link href="/#projects">
        <a>
          <div className="holder 2">
            <FaProjectDiagram />
            <br />
            Projects
          </div>{" "}
        </a>
      </Link>

      <Link href="/#feedback">
        <a>
          {" "}
          <div className="holder 3">
            <FaRegHeart />
            <br />
            Ratings
          </div>{" "}
        </a>
      </Link>

      <Link href="/#contact">
        <a>
          {" "}
          <div className="holder 4">
            <FiSend />
            <br />
            Contact
          </div>{" "}
        </a>
      </Link>

      <Link href="/blog">
        <a>
          {" "}
          <div className="holder2 5">
            <FaNewspaper />
            <br />
            Blog
          </div>{" "}
        </a>
      </Link>
    </div>
  </Navigation>
);

export default Navbar;
