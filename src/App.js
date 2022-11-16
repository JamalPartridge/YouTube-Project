import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Video from "./components/Video";
import CommentForm from "./components/CommentForm";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  function handleSearchResult() {
    setSearchResults(/*api result [] */);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/videos" element={<></>} />
            <Route path="/videos/:id" element={<Video />} />
            <Route path="/" element={<CommentForm />} />{" "}
            {/* why comment form on landing page? */}
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
