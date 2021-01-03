import React from "react";
import TextInput from './common/TextInput';
import SelectInput from './common/SelectInput';

function CourseForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput name="title"
        label="Title"
        value={props.course.title}
        onChange={props.onChange}
        error={props.errors.title} />

      <SelectInput
        label="Author"
        name="authorId"
        onChange={props.onChange}
        value={props.course.authorId || ""}
        defaultOption="Select Author"
        options={props.authors.map(author => ({
          value: author.id,
          text: author.name
        }))}
        error={props.errors.author}
      />

      <TextInput
        name="category"
        onChange={props.onChange}
        value={props.course.category}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
