// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './components/App.jsx'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

// Fichero src/index.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import "../src/styles/App.scss";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);