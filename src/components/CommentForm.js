import { useState, useEffect, useRef } from "react";

export default function CommentForm() {
  const [comment, setComment] = useState("comment");
  const [name, setName] = useState("name");
  const [commentPost, setCommentPost] = useState([]);
  const commentVal = useRef(null);
  const nameVal = useRef(null);

  useEffect(() => {
    setName(nameVal.current.value);
    setComment(commentVal.current.value);
  }, [name, comment]);

  function handleComment() {
    setCommentPost([`${name} says: ${comment}`, ...commentPost]);
    // console.log("test", name, comment, commentPost);
    // console.log(commentPost);
    // console.log(commentPost.length);
  }

  const date = new Date().toJSON().slice(0, 10);
  const today = new Date();
  const time =
    (today.getHours() > 12 ? today.getHours() - 12 : today.getHours()) +
    ":" +
    today.getMinutes() +
    ":" +
    today.getSeconds();

  return (
    <div>
      {
        <div id="comm">
          <label id="label" htmlFor="amount">
            Peanut Gallery:{"   "}
          </label>{" "}
          <input
            ref={nameVal}
            id="name"
            name="name"
            type="text"
            placeholder="name"
            onChange={() => setName(nameVal.current.value)}
          />
          <input
            ref={commentVal}
            id="Comment"
            name="Comment"
            type="text"
            placeholder="Comment"
            onChange={() => setComment(commentVal.current.value)}
          />
          <button onClick={handleComment}>Submit Comment</button>
        </div>
      }
      <section>
        {" "}
        {commentPost.map((e) => (
          <p className="CommSection">
            {" "}
            <h3>{`${e}`}</h3>
            <h5>
              {`  ${date}  ${time} ${today.getHours() > 12 ? "PM" : "AM"}`}
            </h5>
          </p>
        ))}
      </section>
    </div>
  );
}
