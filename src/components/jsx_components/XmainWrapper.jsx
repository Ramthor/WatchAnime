import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const XmainWrapper = () => {
  return (
    <>
      <section className="xmain-wrapper">
        <div className="xmain-wrapper__top">
          <div className="mwt-content">
            <div className="mwt-content__div">
              <div className="logo">
                <img src="/assets/logo-1.png" alt="" />
              </div>
              <div className="cover-img">
                <img src="assets/onepice.png" alt="" />
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
                        <i class="search-btn-icon">
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
    </>
  );
};

export default XmainWrapper;
