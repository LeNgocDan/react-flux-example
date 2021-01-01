import React , { useState } from 'react';
import CourseForm from './CourseForm';
import * as courseApi from '../api/courseApi';

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

function handerSubmit(event){
    event.preventDefault();
    courseApi.saveCourse(course);

 }
  return (
    <>
      <h1>Course Manage</h1>
      <CourseForm course={course} onChange={handerChange} onSubmit={handerSubmit}/>
    </>
  );
} 

export default CourseManage;
