import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Project from "./pages/Project";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App>
        <Routes>
          {/* Define routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<Project />} />
        </Routes>
      </App>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
