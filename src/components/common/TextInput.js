import React from "react";
import PropTypes from 'prop-types';

const TextInput = props => {
  const {name, label, onChange, placeholder, value, error} = props;

  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          className="form-control"
          value={value} />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
};

export default TextInput;
