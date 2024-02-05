import React from "react";
import XmainWrapper from "./jsx_components/XmainWrapper";
import Nav from "./jsx_components/Nav";

const LandingPage = () => {
  return (
    <>
      <div className="xwraper">
        <Nav />
        <XmainWrapper />
      </div>
    </>
  );
};

export default LandingPage;
