import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        hiiiii
      </Routes>
    </>
  );
};

export default App;
