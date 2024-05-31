import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import './api.css'

function Api() {
  const navigate = useNavigate()
  return (
    <>
      <div className="api">
        <div className="streaming-api">🔥 Streaming API</div>
        <div className="get-movie">
          <p className="get-moviep"><i className="fa-solid fa-hand-point-right"></i> Get <p style={{ color: "#1890ff", fontWeight: "bolder", display: "inline" }}> Movie</p> :</p>
          <div className="imdb">
            <i className="fa-brands fa-imdb"></i>
            <p>Using <p style={{ color: "rgba(255, 255, 255, 0.5)", display: "inline" }}>Imdb</p> or <p style={{ color: "rgba(255, 255, 255, 0.5)", display: "inline" }}>Tmdb</p> ID</p>
          </div>
        </div>
      </div>
      <div className="title-text4">
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

export default Api