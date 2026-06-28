import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import "./components/card.jsx";
import Card from "./components/card.jsx";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Sidebar from "./components/sidebar.jsx";

function App() {
  return (
    <>
      <Navbar />

      <div style={{ display: "flex" }}>
        <Sidebar />

        <div
          style={{
            display: "flex",
            gap: "20px",
            padding: "20px",
            flexWrap: "wrap",
          }}
        >
          <Card
            title="Mr. Jojo"
            description="Love to give astonishing facial expressions."
            image="https://images.unsplash.com/photo-1620093339029-ad07db9d6d35?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

          <Card
            title="Mr. Monk"
            description="Hates bathing & loves teasing."
            image="https://plus.unsplash.com/premium_photo-1664299631876-f143dc691c4d?q=80&w=997&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />


        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
