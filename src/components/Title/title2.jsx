import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import './title.css'

function Title(){
  const navigate = useNavigate()
  return(
    <>
      <div className="title-text22">
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

export default Title