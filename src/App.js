import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Home from "./components/Home"
import Video from "./components/Video"
import CommentForm from "./components/CommentForm"

function App() {

  const[searchResults, setSearchResults] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<></>} />
          <Route path="/videos/:id" element={<Video />} />
          <Route path="/" element={<CommentForm />}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
