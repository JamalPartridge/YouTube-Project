import React, { useState, useEffect } from "react";
import { snowboard } from "../mockdata";
import { Link } from "react-router-dom";

console.log(snowboard[1].id.videoId);

export default function Home() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [result, setResult] = useState("");

  useEffect(() => {
    let bro;

    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${search}&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => {
        bro = json.items;
      })
      .then(() => {
        setData(bro);
      });
  }, [search]);

  //   console.log(data);
  //   console.log(search);
  //   const searchVal = useRef(null);

  function handleSearch(e) {
    e.preventDefault();
    setSearch(result);
  }
  return (
    <div>
      <form onSubmit={handleSearch}>
        <label htmlFor="amount">
          <input
            onChange={(e) => setResult(e.target.value)}
            value={result}
            id="search"
            name="search"
            type="text"
            placeholder="Search"
          />
        </label>{" "}
        <button>Search</button>
      </form>
      {(search && <h2> Search results for: {search} </h2>) || (
        <h2>Please search for a video 🎥</h2>
      )}
      <div className="video-cards">
        {console.log("data ", data)}
        {/* BIGGEST ISSUE HERE: LIMITED API CALLS AND SEARCH TERMS ARENT fixing */}
        {search &&
          data.length > 0 &&
          data.map(
            (e) =>
              e.id.kind === "youtube#video" && (
                <li key={e.id} className="list-video">
                  <Link to={`/videos/${e.id.videoId}`}>
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

// no longer needed
// dont do this ...Bad ( was trying to be over analytical )
// (e.snippet.title.toUpperCase().includes(search.toUpperCase()) ||
// e.snippet.description
//   .toUpperCase()
//   .includes(search.toUpperCase())) &&

// snowboard.map((e) => e.snippet.title)
// import { json } from "react-router-dom";
//   useEffect(() => {
//     setNodeList(document.querySelectorAll("li").length);
//   }, []);

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
