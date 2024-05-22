import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome.jsx';
import MovieList from './pages/MoviesList.jsx';
import AddMovie from './MoviesAdd.jsx'; 
import { Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"><button>Home</button></Link>
        <Link to="/movies/list"><button>Movie List</button></Link>
        <Link to="/movies/add"><button>Add Movie</button></Link>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome username="Frank"/>} />
        <Route path="/movies/list" element={<MovieList/>} />
        <Route path="/movies/add" element={<AddMovie/>} />
      </Routes>
    </Router>
  );
}

export default App;