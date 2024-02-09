import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Nav = () => {
  const [isActive, setIsActive] = useState(false);

  const HandelClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="xheader">
        <div className="container">
          <div className="nav-menu">
            <button
              className={isActive ? "nav-menu__btn active" : "nav-menu__btn hi"}
              onClick={HandelClick}
            >
              <MenuIcon
                style={{
                  height: "16px",

                  stroke: isActive ? "#ffdd95" : "white",
                }}
              />
              <p>Menu</p>
            </button>
          </div>
          <nav className={isActive ? "xheader__nav" : "xheader__nav active"}>
            <ul className="nav header__menu-list active">
              <CustomLink to="/home">Home</CustomLink>
              <CustomLink to="/movies">Movies</CustomLink>
              <CustomLink to="/tv">TV Series</CustomLink>
              <CustomLink to="/popular">Most Popular</CustomLink>
              <CustomLink to="/top-ariving">Top Airing</CustomLink>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActivePath = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <>
      <li className="nav-item">
        <Link className="a" to={to} {...props}>
          {children}
        </Link>
      </li>
    </>
  );
};

export default Nav;
