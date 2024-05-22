import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import MovieCard from '../MovieCard.jsx';

const firebaseConfig = {
  apiKey: "AIzaSyCK7tkviN2LRKdvnfRFW7xA7hDvH5c38IQ",
  authDomain: "fir-frank-236ed.firebaseapp.com",
  projectId: "fir-frank-236ed",
  storageBucket: "fir-frank-236ed.appspot.com",
  messagingSenderId: "573631824055",
  appId: "1:573631824055:web:0bf9461c9e5af01423cd32"
};

firebase.initializeApp(firebaseConfig);

function MoviesList() {
  // Declarem un estat per emmagatzemar les pel·lícules
  const [movies, setMovies] = useState([]);

  // Fetch movies from Firestore
  useEffect(() => {
    const fetchMovies = async () => {
      const db = firebase.firestore();
      const snapshot = await db.collection('Movies').get();
      const moviesArray = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMovies(moviesArray);
    };

    fetchMovies();
  }, []);

  //Retornem la llista de pel·lícules
  return (
    <div>
      {movies.map(movie => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  );
}

export default MoviesList;