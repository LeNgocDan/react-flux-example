import React from "react";
import About from "./About";
import Header from "./common/Header";
import HomePage from "./HomePage";
import CoursesPage from "./CoursesPage";
import {Route, Switch, Redirect} from "react-router-dom";
import PageNotFound from "./PageNotFound";
import CourseManage from './CourseManage';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={CourseManage} />
        <Redirect from="/about-page" to="/about" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
