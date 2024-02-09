import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
const XmainWrapper = () => {
  return (
    <>
      <div className="xmain-wrapper">
        <div id="mw-top">
          <div className="container">
            <div className="mwt-content">
              <div className="mwt-icon">
                <img src="./assets/onepice1.png" alt="aniwatch" />
              </div>
              <div className="mwh-logo">
                <Link to="/home" className="mwh-logo-div">
                  <img src="/assets/logo.png" alt="AniWatch" />
                </Link>
                <div className="clearfix"></div>
              </div>
              <div id="xsearch" className="home-search">
                <div className="search-content">
                  <form action="/search" autoComplete="off" id="search-form">
                    <div className="search-submit">
                      <div className="search-icon btn-search">
                        <div className="fa fa-search">
                          <SearchIcon />
                        </div>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control search-input"
                      name="keyword"
                      placeholder="Search anime..."
                      required=""
                    />
                  </form>
                </div>
                <div className="xhashtag">
                  <div className="items">
                    <span className="title">Top search:</span>
                    <CustomSearch to="/search" className="item">
                      One Piece
                    </CustomSearch>

                    <CustomSearch to="/search" className="item">
                      Solo Leveling
                    </CustomSearch>

                    <CustomSearch to="/search" className="item">
                      Jujutsu Kaisen 2nd Season
                    </CustomSearch>

                    <CustomSearch to="/search" className="item">
                      Classroom of the Elite III
                    </CustomSearch>

                    <CustomSearch to="/search" className="item">
                      Mashle: Magic and Muscles
                    </CustomSearch>

                    <CustomSearch to="/search" className="item">
                      Naruto: Shippuden
                    </CustomSearch>

                    <CustomSearch to="/search" className="item">
                      Overflow (Uncensored)
                    </CustomSearch>

                    <CustomSearch to="/search" className="item">
                      Black Clover
                    </CustomSearch>
                    <CustomSearch to="/search" className="item">
                      Attack on Titan
                    </CustomSearch>

                    <CustomSearch to="/search" className="item">
                      Mashle: Magic and Muscles Season 2
                    </CustomSearch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const CustomSearch = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActivePath = useMatch({ path: resolvedPath.pathname, end: true });

  const linkStyle = {
    textDecoration: "none",
    outline: "none",
    color: "#aaa",
    fontFamily: "var(--poppins)",
    fontSize: "14px",
    fontWeight: "400",
    lineHeight: "24px",
  };
  return (
    <>
      <Link style={linkStyle} to={to} {...props}>
        {children},
      </Link>
    </>
  );
};

export default XmainWrapper;
