import React, { useState, useRef, useEffect } from "react";
import { json } from "react-router-dom";
import { snowboard } from "../mockdata";
import { Link } from "react-router-dom";

// snowboard.map((e) => e.snippet.title)

console.log(snowboard[1].id.videoId);

export default function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    let bro;

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${search}&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        {
          bro = json.items;
        }
      })
      .then(() => {
        setData(bro);
      });
  }, [search]);

  console.log(data);
  console.log(search);
  //   useEffect(() => {
  //     setNodeList(document.querySelectorAll("li").length);
  //   }, []);

  const searchVal = useRef(null);

  function handleSearch() {
    setSearch(searchVal.current.value);
  }
  // testing more Dynamic 👇🏿 queries
  //   function multipleExist(arr, values) {
  //     return values.every(value => {
  //       return arr.includes(value);
  //     });
  //     (multipleExist(
  //         e.snippet.title.toUpperCase().split(" "),
  //         search.toUpperCase().split(" ")
  //       ) ||
  //         multipleExist(
  //           e.snippet.title.toUpperCase().split(" "),
  //           search.toUpperCase().split(" ")
  //         ))
  //   }

  return (
    <div>
      <h3>
        <label htmlFor="amount">
          <input
            ref={searchVal}
            id="search"
            name="search"
            type="text"
            placeholder="Search"
          />
        </label>{" "}
        <button onClick={handleSearch}>Search</button>
      </h3>
      {(search && <h2> Search results for: {search} </h2>) || (
        <h2>Please search for a video 🎥</h2>
      )}
      <div className="video-cards">
        {/* BIGGEST ISSUE HERE: LIMITED API CALLS AND SEARCH TERMS ARENT  */}
        {search &&
          data.map(
            (e) =>
              e.id.kind == "youtube#video" &&
              (e.snippet.title.toUpperCase().includes(search.toUpperCase()) ||
                e.snippet.description
                  .toUpperCase()
                  .includes(search.toUpperCase())) && (
                <li className="list-video">
                  <Link to={`/videos/:${e.id.videoId}`}>
                    <img
                      className="img"
                      alt="Search Term"
                      src={`${e.snippet.thumbnails.default.url}`}
                    ></img>
                    <div
                      dangerouslySetInnerHTML={{ __html: e.snippet.title }}
                    ></div>
                  </Link>
                </li>
              )
          )}
      </div>
    </div>
  );
}
