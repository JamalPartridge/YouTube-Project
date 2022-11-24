import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
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

  return (
    <div className={tint ? "tinted_Video" : null}>
      <YouTube
        videoId={id}
        opts={opts}
        onPlay={handleTint} // defaults -> noop
        onPause={handleTint}
        onEnd={handleTint}
      />
      <CommentForm />
    </div>
  );
}
