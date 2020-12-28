import React from "react";
import About from "./About";
import Header from "./common/Header";
import HomePage from "./HomePage";
import CoursesPage from "./CoursesPage";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Route path="/" component={HomePage} />
      <Route path="/about" component={About} />
      <Route path="/courses" component={CoursesPage} />
    </div>
  );
}

export default App;
