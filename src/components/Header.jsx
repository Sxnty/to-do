import React from "react";
import { RiGithubLine, RiInstagramLine } from "react-icons/ri";
function Header() {
  return (
    <nav>
      <h1>Todo <span>app.</span></h1>
      <ul className="nav__items">
        <li>
          <a href="https://github.com/Sxnty">
            <RiGithubLine />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/sxnty29/">
            <RiInstagramLine />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
