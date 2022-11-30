import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import './index.css';

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);