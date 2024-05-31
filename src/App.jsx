import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from 'react'
import Navbar from './components/Navbar/navbar'
import Navbar2 from './components/Navbar2/navbar2'
import Quick from './components/Hot/quick'
import Home from './components/Home/home'
import AboutUs from './components/AboutUs/aboutus'
import ContactUs from './components/ContactUs/contactus'
import Api from './components/Api/api'
import Title from './components/Title/title'
import Title2 from './components/Title/title2'
import PlayMovie from './components/PlayMovie/playmovie'
import Download from "./components/Download/download";
import "./components/Download/download.css";
import './components/Home/home.css'
import './components/Hot/quick.css'
import './components/Navbar/navbar.css'
import './components/Navbar2/navbar2.css'
import './components/AboutUs/aboutus.css'
import './components/ContactUs/contactus.css'
import './components/Api/api.css'
import './components/Title/title.css'
import './components/Title/title2.css'
import './components/PlayMovie/playmovie.css'
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="container">
                <Home />
                <Title />
                <Navbar />
                <Quick />
              </div>
            } />
          <Route
            path="/about"
            element={
              <div className="container">
                <AboutUs />
                <Navbar2 />
                <Quick />
              </div>
            }
          />
          <Route
            path="/contact-us"
            element={
              <div className="container">
                <ContactUs />
                <Navbar2 />
                <Quick />
              </div>
            }
          />
          <Route
            path="/api"
            element={
              <div className="container">
                <Api />
                <Navbar2 />
                <Quick />
              </div>
            }
          />
          <Route
            path="/play/:movieID"
            element={
              <div className="container">
                <PlayMovie />
                <Title2 />
                <Navbar2 />
                <Quick />
              </div>
            }
          />
          <Route
            path="/download/:movieID"
            element={
              <div className="container">
                <Download />
                <Navbar2 />
                <Quick />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
