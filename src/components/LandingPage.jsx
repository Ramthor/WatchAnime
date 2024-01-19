import React from "react";
import XmainWrapper from "./jsx_components/XmainWrapper";
import Nav from "./jsx_components/nav";

const LandingPage = () => {
  return (
    <>
      <div className="tContainer">
        <div className="xwrapper">
          <Nav />
          <XmainWrapper />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
