import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Chat from "@/components/chat";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

