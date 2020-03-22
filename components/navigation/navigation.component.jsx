import { FaCocktail, FaShuttleVan, FaBeer } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";

import { Navigation } from "./navigation.style";

const Navbar = () => (
  <Navigation>
    <ul>
      <li>
        <FaCocktail />
        <br />
        <span>Homes</span>
      </li>
      <li>My Projects</li>
      <li>Testimonials</li>
      <li>
        <IoMdMailUnread />
        Contact
      </li>
      <li>Blogs</li>
    </ul>
  </Navigation>
);

export default Navbar;
