import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Video from "./components/Video";
import ErrorMessage from "./components/ErrorMessage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="App-Links">
          <Link to="/"> Home</Link>
        </h2>
        <h1 classId="Youtube_Project">Youtube Project</h1>
        <h2 className="App-Links">
          <Link to="/about"> About</Link>
        </h2>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorMessage />} />
        <Route path="/videos/:id" element={<Video />} />
        <Route path="/about" element={<About />} />

        {/* why comment form on landing page? Should be apart of the /videos/:id path no? */}
      </Routes>
    </div>
  );
}

export default App;

//no longer needed
// const [searchResults, setSearchResults] = useState([]);
// function handleSearchResult() {
//   setSearchResults(/*api result [] */);
// }

// const navigate = useNavigate();
// thank you JD :)
// console.log(snowboard.map((e) => e.snippet.title));
// import { useState } from "react";
// import { snowboard } from "./mockdata";
// import { useNavigate } from "react-router-dom";
