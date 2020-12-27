import React from "react";
import About from "./About";
import Header from "./common/Header";
import HomePage from "./HomePage";

function App() {
  function getPage() {
    const path = window.location.pathname;
    if (path === "/about") return <About />;
    return <HomePage />;
  }

  return (
    <div>
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
