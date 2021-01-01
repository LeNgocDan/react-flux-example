import React , { useState } from 'react';
import CourseForm from './CourseForm';

const CourseManage = props => {
  const [course, setCourse ] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: ""
  })
  function handerTitleChange(event) {
  const updateCourse = {...course, title: event.target.value };
    setCourse(updateCourse);
  }
  return (
    <>
      <h1>Course Manage</h1>
      <CourseForm course={course} onTitleChange={handerTitleChange}/>
    </>
  );
} 

export default CourseManage;
