import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { firebaseConfig } from './components/config/config.js' //Importem el access a la base de dades
import * as firebase from 'firebase/app'; 
import './index.css'
import AppX from './components/AppX.jsx';

firebase.initializeApp(firebaseConfig); //Inicialitzem la base de dades
console.log(firebase.SDK_VERSION); //Comprovem la versió de la base de dades

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppX />
  </React.StrictMode>,
)
