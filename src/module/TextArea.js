import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const handleClick = () => {
    //console.log("uppercase button clicked" + text)
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleOnChange = (event) => {
    //console.log("uppercase button clicked")
    setText(event.target.value);
  };

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleClick}>
        Convert to Upper case
      </button>
    </div>
    <div className="container my-3">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words allowed and you entered {text.length}</p>
    </div>
    </>
  );
}
