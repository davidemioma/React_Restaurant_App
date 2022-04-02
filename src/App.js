import React from "react";
import { NavBar, Header, AboutUs, SpecialMenu, Chef } from "./components";
import { Intro, Laurels, Gallery, FindUs, Footer } from "./components";

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </div>
  );
};

export default App;
