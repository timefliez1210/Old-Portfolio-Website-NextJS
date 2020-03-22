import { FaCocktail, FaShuttleVan, FaBeer } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import Link from "next/link";

import { Navigation } from "./navigation.style";

const Navbar = () => (
  <Navigation>
    <div className="container">
      <div className="holder 1">
        <Link href="/">
          <a>
            <FaCocktail />
            <br />
            Home
          </a>
        </Link>
      </div>

      <div className="holder 2">
        <Link href="#projects">
          <a>
            <FaCocktail />
            <br />
            Projects
          </a>
        </Link>
      </div>

      <div className="holder 3">
        <Link href="#feedback">
          <a>
            <FaCocktail />
            <br />
            Feedback
          </a>
        </Link>
      </div>

      <div className="holder 4">
        <Link href="#contact">
          <a>
            <FaCocktail />
            <br />
            Contact
          </a>
        </Link>
      </div>

      <div className="holder2 5">
        <Link href="/blog">
          <a>
            <FaCocktail />
            <br />
            Blog
          </a>
        </Link>
      </div>
    </div>
  </Navigation>
);

export default Navbar;
