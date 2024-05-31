import React, { Component, useState } from "react";
import './contactus.css'
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate()
  return (
    <>
      <div className="contact">
        <h1>Contact us</h1>
        <p>Demi kenyamanan bersama, untuk <b style={{ color: "#00ff00" }}>Pemasangan Banner</b> Silahkan Gunakan Email Perusahaan Anda, selain itu akan kami abaikan, terimakasih atas kerjasamanya.</p>
        <br />
        <div className="contact-p">
          <p>Your Name <p style={{ color: "#ff4d4f" }}>*</p></p>
          <br />
          <input type="text" className="contact-input" />
          <p>Your Email Address <p style={{ color: "#ff4d4f" }}>*</p></p>
          <input type="text" className="contact-input" />
          <p>Your Message  <p style={{ color: "#ff4d4f" }}>*</p></p>
          <textarea type="text" className="contact-input2" />
          <h1><i className="fa-solid fa-paper-plane"></i> Send Message</h1>
        </div>
      </div>
      <div className="title-text3">
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

export default Contact