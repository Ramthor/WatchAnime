import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const LandingPage = () => {
  const [isActive, setIsActive] = useState(false);

  const HandelClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <div className="xwrapper">
        <div className="xheader">
          <div className="container">
            <div className="nav-menu">
              <button
                className={isActive ? "nav-menu__btn active" : "nav-menu__btn"}
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
              <ul className="nav header__menu-list">
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/movies">Movies</CustomLink>
                <CustomLink to="/tv">TV Series</CustomLink>
                <CustomLink to="/popular">Most Popular</CustomLink>
                <CustomLink to="/top-ariving">Top Airing</CustomLink>
              </ul>
            </nav>
          </div>
        </div>
        <section className="xmain-wrapper">
          <div className="xmain-wrapper__top">
            <div className="container">
              <div className="mwt-content">
                <div className="mwt-icon">
                  <div>
                    <img src="/assets/bg5.jpg" alt="" />
                  </div>
                </div>
                <div className="logo">
                  <img src="/assets/logo.png" alt="" />
                </div>
                <div className="xseach">
                  <div class="search-content">
                    <form action="/search" autocomplete="off" id="search-form">
                      <input
                        type="text"
                        class="form-control search-input"
                        name="keyword"
                        placeholder="Search anime..."
                        required=""
                      />
                      <div class="search-submit">
                        <div class="search-icon btn-search">
                          <i class="serch-btn-icon">
                            <SearchIcon />
                          </i>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xmain-wrapper__body"></div>
        </section>
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

export default LandingPage;
