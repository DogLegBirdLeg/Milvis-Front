import React from "react";
import { Link } from "react-router-dom";

import "styles/common/Header.css";
import MobileHeader from './MobileHeader';
import PCHeader from './PCHeader';

const Header = () => {
  return (
    <header>
      <div className='milvis-logo'>
        <Link
          to="/"
          style={{
          textDecoration: "none",
          color: "white"
        }}>
          <h1>Milvis</h1>
        </Link>
      </div>
      <div className="mobile-header">
        <MobileHeader />
      </div>
      <div className="pc-header">
        <PCHeader />
      </div>
    </header>
  );
};
export default Header;
