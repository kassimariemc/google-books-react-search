import React from "react";

// This file exports the Input and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "left", margin: 10 }} className="btn btn-primary">
      {props.children}
    </button>
  );
}
