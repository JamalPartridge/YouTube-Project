import { useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import YouTube from "react-youtube";
import CommentForm from "./CommentForm";

export default function Video({}) {
  const [tint, setTint] = useState(false);
  const { id } = useParams();

  function handleTint() {
    setTint(!tint);
  }

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // "https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  console.log(tint);
  const date = new Date().toJSON().slice(0, 10);
  const today = new Date();
  const time =
    (today.getHours() > 12 ? today.getHours() - 12 : today.getHours()) +
    ":" +
    today.getMinutes() +
    ":" +
    today.getSeconds();
  return (
    <div className={tint ? "tinted_Video" : null}>
      {id === "EwTZ2xpQwpA" && (
        <div>
          {" "}
          <YouTube
            videoId={id}
            opts={opts}
            onPlay={handleTint} // defaults -> noop
            onPause={handleTint}
            onEnd={handleTint}
          />
          <CommentForm />
          <p className="CommSection">
            {/* <h3>C.King says: is that tha young Goat JD? 🤣</h3> */}
            <h5>{` ${date}  ${time} ${
              today.getHours() > 12 ? "PM" : "AM"
            } `}</h5>
          </p>
        </div>
      )}
      {id !== "EwTZ2xpQwpA" && (
        <div>
          {" "}
          <YouTube
            videoId={id}
            opts={opts}
            onPlay={handleTint} // defaults -> noop
            onPause={handleTint}
            onEnd={handleTint}
          />
          <CommentForm />
        </div>
      )}
    </div>
  );
}
