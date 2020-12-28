import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div>
      <h1>PageNotFound</h1>
      <p>
        <Link to="/">Back to home.</Link>
      </p>
    </div>
  );
}
