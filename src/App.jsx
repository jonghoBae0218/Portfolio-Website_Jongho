import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// src/App.jsx

function App() {
  return (
    <div className="bg-gray-800 text-white p-8 min-h-screen flex items-center justify-center">
      <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-4">Tailwind CSS is working!</h1>
        <p className="text-lg">This is a test of Tailwind utility classes.</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600">
          Test Button
        </button>
      </div>
    </div>
  );
}

export default App;
