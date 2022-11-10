import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

    

const router = (
<Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
</Router>
)



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(router);

