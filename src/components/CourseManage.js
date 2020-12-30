import React from 'react';

const CourseManage = props => {
  return (
    <>
      <h1>Course Manage</h1>
      {props.match.params.slug}
    </>
  );
} 

export default CourseManage;
