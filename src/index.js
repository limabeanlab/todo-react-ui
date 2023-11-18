import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

const DATA= [
  { id: "todo-0", name: "Eat",
completed: true },
  { id: "todo-1", name: "Code",
completed: false },
  { id: "todo-2", name: "Sleep",
completed: false },
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App tasks={DATA} />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
