import React, { useState, useRef, useEffect } from "react";
import { snowboard } from "../mockdata";
// snowboard.map((e) => e.snippet.title)

console.log(snowboard[1].snippet.title);

export default function Home() {
  const [search, setSearch] = useState("");
  const [myNodelist, setNodeList] = useState(0);

  useEffect(() => {
    setNodeList(document.querySelectorAll("li").length);
  }, [search]);
  useEffect(() => {
    setNodeList(document.querySelectorAll("li").length);
  }, []);

  const searchVal = useRef(null);

  function handleSearch() {
    setSearch(searchVal.current.value);
  }
  //   console.log(document.querySelectorAll("li").length);
  console.log(myNodelist);
  console.log(search);
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
      {(myNodelist && <h2> Search results for: {search} </h2>) ||
        (search && <h2>No search results for: {search}</h2>) || (
          <h2>Please search for a video 🎥</h2>
        )}
      <div className="video-cards">
        {search &&
          snowboard.map(
            (e) =>
              e.id.kind == "youtube#video" &&
              (e.snippet.title.toUpperCase().includes(search.toUpperCase()) ||
                e.snippet.description
                  .toUpperCase()
                  .includes(search.toUpperCase())) && (
                <li className="list-video">
                  <img
                    className="img"
                    alt="Search Term"
                    src={`${e.snippet.thumbnails.default.url}`}
                  ></img>
                  <div
                    dangerouslySetInnerHTML={{ __html: e.snippet.title }}
                  ></div>
                  {/* {e.snippet.title} */}
                </li>
              )
          )}
      </div>
    </div>
  );
}
