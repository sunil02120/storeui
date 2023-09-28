import React, { useState , useEffect} from "react";
import PropTypes from "prop-types";




export default function HighestProfitItem(props) {
  const [posts, setPosts] = useState("");
  const callApi = () => {
    fetch('http://localhost:8082/store/api/highestProfitItem/'+text, { method: 'GET' }, {mode:'cors'})
    .then((response) => {
      if(!response.ok) return "Data not found";
      else return response.json();
    })
    .then((data) => {
      setPosts("item:"+data.itemName+", quantity:"+data.quantity);
    });
  }
  const [text, setText] = useState("2023-01-01");
  const handleOnChange = (event) => {
    //console.log("uppercase button clicked")
    setText(event.target.value);
  };
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <label>Date</label>
      <input name="date" value={text} onChange={handleOnChange}/>
      <button className="btn btn-primary" onClick={callApi}>
        Submit
      </button>
      <div><textarea value={posts} onChange={handleOnChange}></textarea></div>
    </div>
    </>
  );
}