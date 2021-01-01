import React, { useState, useEffect } from "react";
import CourseList from "./CourseList";
import courseStore from '../stores/courseStore';
import { Link  } from 'react-router-dom';
import { loadCourses } from '../actions/courseAction';

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourse());

  useEffect(() => {
    courseStore.addChangeListener(onChange)
    if (courseStore.getCourse().length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange); //clearup on unmount
  }, []);

  function onChange() {
    setCourses(courseStore.getCourse());
  }

  return (
    <>
      <h1>Courses</h1>
      <Link className="btn btn-primary" to="/course">Add Course</Link>
      <CourseList courses={courses} />
    </>
  );
}
export default CoursesPage;
