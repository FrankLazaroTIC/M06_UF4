import { useEffect, useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCK7tkviN2LRKdvnfRFW7xA7hDvH5c38IQ",
  authDomain: "fir-frank-236ed.firebaseapp.com",
  projectId: "fir-frank-236ed",
  storageBucket: "fir-frank-236ed.appspot.com",
  messagingSenderId: "573631824055",
  appId: "1:573631824055:web:0bf9461c9e5af01423cd32"
};

firebase.initializeApp(firebaseConfig);

function AddMovie() {
  //Estats per guardar les dades del formulari
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState('');
  const [image, setImage] = useState('');
  const [rate, setRate] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    //Afegim la pel·lícula a la base de dades
    const db = firebase.firestore();
    db.collection("Movies").add({
      title,
      description,
      duration: Number(duration),
      image,
      rate: Number(rate),
      year: Number(year)
    }).then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      // Netejem els camps del formulari
      setTitle('');
      setDescription('');
      setDuration('');
      setImage('');
      setRate('');
      setYear('');
      //Amb el alert mostrem un missatge dient que la pel·lícula s'ha afegit correctament
      alert('La película ha sido añadida correctamente');
    }).catch((error) => {
      console.error("Error adding document: ", error);
    });
  };

  return (
    //El formulari amb els camps per afegir una pel·lícula
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto' }}>
    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required style={{ margin: '10px 0', padding: '10px' }} />
    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" required style={{ margin: '10px 0', padding: '10px' }} />
    <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} placeholder="Duration" required style={{ margin: '10px 0', padding: '10px' }} />
    <input type="text" value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" required style={{ margin: '10px 0', padding: '10px' }} />
    <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} placeholder="Rate" required style={{ margin: '10px 0', padding: '10px' }} />
    <input type="number" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Year" required style={{ margin: '10px 0', padding: '10px' }} />
    <button type="submit" style={{ margin: '10px 0', padding: '10px', cursor: 'pointer' }}>Afegir</button>
  </form>
  );
}

export default AddMovie;