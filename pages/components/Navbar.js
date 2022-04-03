import React, { useState, useEffect } from "react";
import {  VscHome, VscAccount, VscLibrary, VscChevronDown, VscChevronUp } from "react-icons/vsc"
import {
  GrSolaris,
} from "react-icons/gr";
const Navbar = () => {
  const [menu, setMenu] = useState(true);
  const showMiniLinks = () => {
    setMenu(!menu);
  };
  return (
    <nav>
      <div className="nav-container">
        <div className="title">
          <h1>TrailerMax</h1>
          <GrSolaris className="title-icon" />
          {/* <MovieReel /> */}
        </div>
        <ul className="mini-links">
          <li>
          <a>
              <VscHome />
            </a>
          </li>
          <li>
          <a>
              <VscLibrary />
            </a>
          </li>
          <li>
            <a className="navbtn" onClick={showMiniLinks}>
              <VscAccount />
              {menu ? <VscChevronDown className="mini-navbtn" /> : <VscChevronUp className="mini-navbtn" />}
            </a>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
