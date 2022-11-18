import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Video from "./components/Video";
import CommentForm from "./components/CommentForm";
import { snowboard } from "./mockdata";

import "./App.css";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  // thank you JD :)
  console.log(snowboard.map((e) => e.snippet.title));

  function handleSearchResult() {
    setSearchResults(/*api result [] */);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-Links">Home</h2>
        <h1 className="App-Links">Youtube Project</h1>
        <h2 className="App-Links">About</h2>
      </header>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<></>} />
          <Route path="/videos/:id" element={<Video />} />
          <Route path="/" element={<CommentForm />} />
          {"  "}
          {/* why comment form on landing page? Should be apart of the /videos/:id path no? */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
