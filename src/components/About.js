import React from "react";

function About(props) {
  return (
    <div className="About">
      <div>
        <h1>About the Project</h1>
        <br />
        <h4>
          This is our project for creating a 'Youtube clone' Application. We
          wanted to have something to work on as a passion project dedicated to
          one of our favorite websites, Youtube. We've spent much time learning
          how to incorperate what we learned from the React library. I also
          implemented some features that I would like to see youtube have.
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
            <h6 className="about-me-bio">
              I am a full stack web developer from Brooklyn, New York, proficent
              in front end and back end Javascript. I've spent the last few
              months learning the fundementals of Javascript; the basics of
              front end tools like HTML and CSS and enjoying getting familar
              with different parts of the React Library. I've been working with
              functional components and hooks and its been very helpful in
              creating websites like these ... <br /> Link to my{" "}
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
            <h6 className="about-me-bio">
              Hey eveyone, Jamal here. I am on a journey to become a full stack web developer. I have currently tackled the basics of Javascript, HTML, CSS, and now React. Using these languages, I was able to create websites just like this YouTube project ... <br /> link to my{" "}
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
