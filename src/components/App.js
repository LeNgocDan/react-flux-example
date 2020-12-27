import React from "react";
import About from "./About";
import Header from "./common/Header";
import HomePage from "./HomePage";
import CoursesPage from "./CoursesPage";

function App() {
  function getPage() {
    const path = window.location.pathname;
    if (path === "/courses") return <CoursesPage />;
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
