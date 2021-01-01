import React , { useState } from 'react';
import CourseForm from './CourseForm';
import * as courseApi from '../api/courseApi';
import {toast } from 'react-toastify';

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
    toast.success("Course Saved.");
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
