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
  function handeChange({target}) {
    setCourse({...course, [target.name]: target.value });
  }

function handeSubmit(event){
    event.preventDefault();
  courseApi.saveCourse(course).then(() => {
    props.history.push("/courses");
  });
 }

  return (
    <>
      <h1>Course Manage</h1>
      <CourseForm course={course} onChange={handeChange} onSubmit={handeSubmit}/>
    </>
  );
} 

export default CourseManage;
