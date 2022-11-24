import React from "react";
import { Link } from "react-router-dom";

function About(props) {
  return (
    <div className="About">
      <div>
        <h1>About the Project</h1>
        <br /> <h4>Something about the project</h4>
      </div>
      <div>
        <h1>About the Devs</h1>
        <div className="About_Devs">
          <h2>
            <img
              className="About_pfp"
              src={`https://avatars.githubusercontent.com/u/105737822?v=4`}
            ></img>
            <br />
            Ron John <br />
            <h6>
              Something about Me ... Link to my{" "}
              <a href={"https://github.com/ronJohnPursuit"} target="_blank">
                GitHub
              </a>{" "}
              🏄🏿‍♂️
            </h6>
          </h2>
          <h2>
            <img
              className="About_pfp"
              src={`https://avatars.githubusercontent.com/u/105737721?v=4`}
            ></img>
            <br />
            Jamal Partridge <br />
            <h6>
              Something about Me ... link to my{" "}
              <a href={"https://github.com/JamalPartridge"} target="_blank">
                GitHub
              </a>{" "}
              😎
            </h6>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default About;
