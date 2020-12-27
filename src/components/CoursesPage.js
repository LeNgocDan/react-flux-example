import React from "react";
import { getCourses } from "../api/courseApi";

class CoursesPage extends React.Component {
  state = {
    courses: [],
  };

  componentDidMount() {
    getCourses().then((courses) => this.setState({ courses: courses }));
  }

  renderRow(course) {
    return (
      <tr>
        <th>{course.title}</th>
        <th>{course.authorId}</th>
        <th>{course.category}</th>
      </tr>
    );
  }

  render() {
    return (
      <>
        <h1>Courses</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Author ID</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {this.state.courses.map((course) => {
              return (
                <tr key={course.id}>
                  <td>{course.title}</td>
                  <td>{course.authorId}</td>
                  <td>{course.category}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </>
    );
  }
}

export default CoursesPage;
