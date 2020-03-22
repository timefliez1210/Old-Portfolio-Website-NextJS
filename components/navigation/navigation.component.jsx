import {
  FaCocktail,
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
      <div className="holder 1">
        <Link href="/">
          <a>
            <FaStoreAlt />
            <br />
            Home
          </a>
        </Link>
      </div>

      <div className="holder 2">
        <Link href="#projects">
          <a>
            <FaProjectDiagram />
            <br />
            Projects
          </a>
        </Link>
      </div>

      <div className="holder 3">
        <Link href="#feedback">
          <a>
            <FaRegHeart />
            <br />
            Feedback
          </a>
        </Link>
      </div>

      <div className="holder 4">
        <Link href="#contact">
          <a>
            <FiSend />
            <br />
            Contact
          </a>
        </Link>
      </div>

      <div className="holder2 5">
        <Link href="/blog">
          <a>
            <FaNewspaper />
            <br />
            Blog
          </a>
        </Link>
      </div>
    </div>
  </Navigation>
);

export default Navbar;
