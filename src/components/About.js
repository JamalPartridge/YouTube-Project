import React from "react";

function About(props) {
  return (
    <div className="About">
      <div>
        <h1>About the Project</h1>
        <br />{" "}
        <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </h4>
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
