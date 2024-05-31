import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import './aboutus.css'

function About() {

  const navigate = useNavigate()

  return (
    <>
      <div className="about">
        <h1 align='center'>About</h1>
        <div className="about-p">
          <b>IDLIX</b> adalah situs streaming <p style={{ color: "#ffff00", fontWeight: "bolder" }}>Film Gratis.</p> Kami mengizinkan Anda menonton film online tanpa harus mendaftar atau membayar, dengan lebih dari <p style={{ color: "#00ff00", fontWeight: "bolder" }}>50.000 film dan Serial TV.</p> Anda juga dapat <p style={{color: "#00ff00", fontWeight: "bolder"}}>mengunduh film</p> lengkap dan menontonnya nanti.
        </div>
      </div>
      <div className="title-text2">
          <p>Nonton Gomovies dan Serial TV terbaru dengan kualitas tinggi yang tersedia dalam subtitle Indonesia dan diupdate setiap hari. Film Box Office hingga Serial TV Terbaik semua tersedia disitus <br></br> dengan perpustakaan lebih dari 50k Movies dan 70k Tv Series.</p>
          <div className="gomovies-details">
          <p onClick={() => navigate('/about')}>About us</p>
          <p onClick={() => navigate('/contact-us')}>Contact us</p>
          <p onClick={() => navigate('/api')}>API</p>
          <p onClick={() => navigate('/privacy-policy')}>Privacy Policy</p>
          <p onClick={() => navigate('/disclaimer')}>Disclaimer</p>
          <p onClick={() => navigate('/dmca')}>DMCA</p>
          </div>
          <p className="copyright">copyright @ 2023 all rights reserverd</p>
        </div>
    </>
  )
}

export default About