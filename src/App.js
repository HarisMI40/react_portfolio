import React from "react";
import { Header, About, Footer, Skills, Work } from "./container";
import { Navbar } from "./components";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
