import * as React from "react";
import { Logo, nav } from "./globalStyles";
import Price from "./components/price";
import Search from "./components/search/Search";
// @ts-ignore
import * as logo from "./images/logo.png";
import { Link } from "react-router-dom";

const Nav = (props: any) => {
  console.log(props);
  return (
    <div className={nav}>
      <div className="flexbox-container">
        <div>
          <Logo src={logo} alt="Adaptive Logo" />
        </div>
      </div>

      <div className="flexbox-container searchbar-container">
        <div className="searchbar">
          <Search />
        </div>
        <div className="price-information">
          <Price />
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Nav;
