import { useState } from "react";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import CommentForm from "./CommentForm";

export default function Video() {
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
            <h3>
              JSB says: Can we stop comparing this man to Prince, Prince could
              never!! 😤{" "}
            </h3>
            <h5>{` ${date}  ${time} ${
              today.getHours() > 12 ? "PM" : "AM"
            } `}</h5>
          </p>
          <p className="CommSection">
            <h3>C.King says: is that tha young Goat JD? 🤣</h3>
            <h5>{` ${date}  ${time} ${
              today.getHours() > 12 ? "PM" : "AM"
            } `}</h5>
          </p>
          <p className="CommSection">
            <h3>Mr.Richards says: Can y'all stop thats not me 🧐</h3>
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
          <p className="CommSection">
            <h3>
              BarzDroppa_diane says: I wish someone in my class could rap like
              this ... wanna battle rap so bad 😈 😤!!{" "}
            </h3>
            <h5>{` ${date}  ${time} ${
              today.getHours() > 12 ? "PM" : "AM"
            } `}</h5>
          </p>
          <p className="CommSection">
            <h3>Mina says: this sone would be great on an AMV 👾 </h3>
            <h5>{` ${date}  ${time} ${
              today.getHours() > 12 ? "PM" : "AM"
            } `}</h5>
          </p>
          <p className="CommSection">
            <h3>Destiny says: Not better than HOV tho 😎</h3>
            <h5>{` ${date}  ${time} ${
              today.getHours() > 12 ? "PM" : "AM"
            } `}</h5>
          </p>
        </div>
      )}
    </div>
  );
}
