import React , { useState, useEffect } from 'react';
import CourseForm from './CourseForm';
import * as courseApi from '../api/courseApi';
import { toast } from 'react-toastify';

const CourseManage = props => {
  const [errors, setErrors]= useState({});
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

  useEffect(()=> {
    const slug = props.match.params.slug;
    if (slug) {
      courseApi.getCourseBySlug(slug).then(_course => setCourse(_course));
    }
  }, [props.match.params.slug]);

  function formIsValid() {
    const _errors = {};
    if (!course.title) _errors.title = "Title is required.";
    if (!course.authorId) _errors.authorId = "AuthorId is required.";
    if (!course.category) _errors.category = "Category is required.";

    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

function handeSubmit(event){
    event.preventDefault();
  if (!formIsValid()) return;
  courseApi.saveCourse(course).then(() => {
    props.history.push("/courses");
    toast.success("Course Saved.");
  });
 }

  return (
    <>
      <h1>Course Manage</h1>
      <CourseForm course={course} onChange={handeChange} onSubmit={handeSubmit} errors={errors}/>
    </>
  );
} 

export default CourseManage;
