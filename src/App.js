import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import './assets/styles/App.css';
import './assets/styles/header.css';
import './assets/styles/home.css';
import './assets/styles/footer.css';
import './assets/styles/contact.css';
import './assets/styles/mediaquery.css';



function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact-us" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>


      </Routes>
      <Footer/>
    </Router>
   
  );
}

export default App;
