import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <main className="bg-gray-900 text-white min-h-screen p-6 shadow-lg">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
