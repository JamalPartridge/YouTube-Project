import { useState, useEffect, useRef } from "react";

export default function CommentForm({}) {
  const [comment, setComment] = useState([]);
  const [name, setName] = useState([]);
  const commentVal = useRef(null);
  const nameVal = useRef(null);

  function handleComment() {
    setComment(...comment, `${commentVal.current.value}`);
    setName(...name, `${nameVal.current.value}`);
    // comsec = document.getElementById("comm");
    // comsecnew = document.createElement("p");
    // comsecnew.innertext("test");
    // comsec.append(comsecnew);
    console.log("test", name, comment);
    console.log(name.length, comment.length);
  }
  // let comsec;
  // let comsecnew;
  return (
    <div>
      <label htmlFor="amount">
        <input
          ref={nameVal}
          id="name"
          name="name"
          type="text"
          placeholder="name"
        />
        <input
          ref={commentVal}
          id="Comment"
          name="Comment"
          type="text"
          placeholder="Comment"
        />
        {<div id="comm"></div>}
      </label>{" "}
      <button onClick={handleComment}>Comment</button>
      {/* {comment.map((e) => (
        <h4>{`${e}`}</h4>
      ))} */}
    </div>
  );
}
