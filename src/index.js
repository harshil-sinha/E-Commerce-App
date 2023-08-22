import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import "./App.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
   <Navbar/>
   <Header/>
   <Body/>
   <Footer/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

