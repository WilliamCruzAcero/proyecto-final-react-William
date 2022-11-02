import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAjjPHyx4fk1gXPRo1-_KNoM3DJs7nxyD4",
  authDomain: "proyecto-final-react-6b285.firebaseapp.com",
  projectId: "proyecto-final-react-6b285",
  storageBucket: "proyecto-final-react-6b285.appspot.com",
  messagingSenderId: "308682877226",
  appId: "1:308682877226:web:ea9746e465fd09c1885653"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
