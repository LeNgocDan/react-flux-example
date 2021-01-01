import React from "react";
import About from "./About";
import Header from "./common/Header";
import HomePage from "./HomePage";
import CoursesPage from "./CoursesPage";
import {Route, Switch, Redirect} from "react-router-dom";
import PageNotFound from "./PageNotFound";
import CourseManage from './CourseManage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={About} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/course/:slug" component={CourseManage} />
        <Route path="/course" component={CourseManage} />
        <Redirect from="/about-page" to="/about" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
