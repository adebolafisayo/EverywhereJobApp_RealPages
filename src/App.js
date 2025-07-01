import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import JobBoard from "./pages/JobBoard";
import AdminPostJob from "./pages/AdminPostJob";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<JobBoard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/admin" element={<AdminPostJob />} />
    </Routes>
  </Router>
);

export default App;
