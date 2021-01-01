import React, { useState, useEffect } from "react";
import CourseList from "./CourseList";
import courseStore from '../stores/courseStore';
import { Link  } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loadCourses, deleteCourse } from '../actions/courseAction';

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourse());

  useEffect(() => {
    courseStore.addChangeListener(onChange)
    if (courseStore.getCourse().length === 0) loadCourses();
    return () => courseStore.removeChangeListener(onChange); //clearup on unmount
  }, [courses.length]);

  function onChange() {
    setCourses(courseStore.getCourse());
  }

  function onDelete(id) {
    deleteCourse(id).then(() => {
      toast.success("Delete success.");
    });
  }
 
  return (
    <>
      <h1>Courses</h1>
      <Link className="btn btn-primary" to="/course">Add Course</Link>
      <CourseList courses={courses} deleteCourse={onDelete} />
    </>
  );
}
export default CoursesPage;
