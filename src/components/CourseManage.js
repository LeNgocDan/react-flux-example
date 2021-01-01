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
  function handerChange({target}) {
    setCourse({...course, [target.name]: target.value });
  }
  return (
    <>
      <h1>Course Manage</h1>
      <CourseForm course={course} onChange={handerChange}/>
    </>
  );
} 

export default CourseManage;
