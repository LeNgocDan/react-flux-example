import React from "react";

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <div className="field">
          <input
            id="title"
            type="text"
            name="title"
            onChange={props.onChange}
            className="form-control"
            value={props.course.title}
          />
        </div>
        {props.errors.title && (<div className="alert alert-danger">{props.errors.title}</div>)}
      </div>

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            id="author"
            name="authorId"
            onChange={props.onChange}
            value={props.course.authorId || ""}
            className="form-control"
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
        {props.errors.authorId && (<div className="alert alert-danger">{props.errors.authorId}</div>)}
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <div className="field">
          <input
            type="text"
            id="category"
            name="category"
            onChange={props.onChange}
            className="form-control"
            value={props.course.category}
          />
        </div>
        {props.errors.category && (<div className="alert alert-danger">{props.errors.category}</div>)}
      </div>

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
