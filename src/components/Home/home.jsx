import React, { Component, useState } from "react";
import './home.css'
import Poster1 from './images/avengers-poster.png'
import Poster2 from './images/spiderman-far-from-home-poster.png'
import Poster3 from './images/rampage-poster.png'
import Poster4 from './images/a-quiet-place-poster.png'
import Poster5 from './images/your-name-poster.png'
import Poster6 from './images/a-silent-voice-poster.png'
import Poster7 from './images/the-maze-runner-poster.png'
import Poster8 from './images/ready-player-one-poster.png'
import Poster9 from './images/thor-ragnarok-poster.png'
import Poster10 from './images/zack-snyder-justice-league-poster.png'
import Poster11 from './images/avengers-infinity-wars-poster.png'
import Poster12 from './images/i-am-a-hero-poster.png'
import Poster13 from './images/alice-in-borderland-poster.png'
import Poster14 from './images/poster14.png'
import Poster15 from './images/poster15.png'
import Poster16 from './images/poster16.png'
import Poster17 from './images/poster17.png'
import Poster18 from './images/poster18.png'
import Poster19 from './images/poster19.png'
import Poster20 from './images/poster20.png'
import Poster21 from './images/poster21.png'
import Poster22 from './images/poster22.png'
import Poster23 from './images/poster23.png'
import Poster24 from './images/poster24.png'
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [activeTab, setActiveTab] = useState(1);
  const handleActiveTab = (active) => {
    setActiveTab(active)
  }


  return (
    <>
      <div className="homePage">
        <div className="recommend-page">
          <div className="recommend-icon">
            <p><i className="fa-solid fa-thumbs-up"></i>Recommended</p>
          </div>
          <div className="movie-tv">
            <p className={activeTab === 1 ? 'selected' : ''} onClick={() => handleActiveTab(1)}><i className="fa-solid fa-film"></i>Movies</p>
            <p className={activeTab === 2 ? 'selected' : ''} onClick={() => handleActiveTab(2)}><i className="fa-solid fa-tv" ></i>TV Shows</p>
          </div>
        </div>
      </div>
      <div className={`recommend-movie ${activeTab === 2 ? 'visible' : ''}`}>
        <div className="recommend-container">
          <img src={Poster1} className="poster" />
          <p className="posterP">HD</p>
          <p className="posterPmin">192 Min</p>
          <div className="poster-icon">
            <p>Avengers: Endgame</p>
            <i className="fa-solid fa-download"></i>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-code"></i>
          </div>
        </div>
        <div className="recommend-container">
          <img src={Poster2} className="poster" />
          <p className="posterP">HD</p>
          <p className="posterPmin">129 Min</p>
          <div className="poster-icon">
            <p>Spider-Man: Far from Home</p>
            <i className="fa-solid fa-download"></i>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-code"></i>
          </div>
        </div>
        <div className="recommend-container">
          <img src={Poster3} className="poster" />
          <p className="posterP">HD</p>
          <p className="posterPmin">107 Min</p>
          <div className="poster-icon">
            <p>Rampage</p>
            <i className="fa-solid fa-download"></i>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-code"></i>
          </div>
        </div>
        <div className="recommend-container">
          <img src={Poster4} className="poster" />
          <p className="posterP">HD</p>
          <p className="posterPmin">90 Min</p>
          <div className="poster-icon">
            <p>A Quiet Place</p>
            <i className="fa-solid fa-download"></i>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-code"></i>
          </div>
        </div>
        <div className="recommend-container">
          <img src={Poster5} className="poster" />
          <p className="posterP">HD</p>
          <p className="posterPmin">112 Min</p>
          <div className="poster-icon">
            <p>Your Name.</p>
            <i className="fa-solid fa-download"></i>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-code"></i>
          </div>
        </div>
        <div className="recommend-container">
          <img src={Poster6} className="poster" />
          <p className="posterP">HD</p>
          <p className="posterPmin">129 Min</p>
          <div className="poster-icon">
            <p>A Silent Voice</p>
            <i className="fa-solid fa-download"></i>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-code"></i>
          </div>
        </div>
        <div className="recommend-container">
          <img src={Poster7} className="poster" />
          <p className="posterP">HD</p>
          <p className="posterPmin">113 Min</p>
          <div className="poster-icon">
            <p>The Maze Runner</p>
            <i className="fa-solid fa-download"></i>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-code"></i>
          </div>
        </div>
        <div className="recommend-container">
          <img src={Poster8} className="poster" />
          <p className="posterP">HD</p>
          <p className="posterPmin">139 Min</p>
          <div className="poster-icon">
            <p>Ready Player One</p>
            <i className="fa-solid fa-download"></i>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-code"></i>
          </div>
        </div>
        <div className="recommend-container">
          <img src={Poster9} className="poster" />
          <p className="posterP">HD</p>
          <p className="posterPmin">130 Min</p>
          <div className="poster-icon">
            <p>Thor: Ragnarok</p>
            <i className="fa-solid fa-download"></i>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-code"></i>
          </div>
        </div>
        <div className="recommend-container">
          <img src={Poster10} className="poster" />
          <p className="posterP">HD</p>
          <p className="posterPmin">242 Min</p>
          <div className="poster-icon">
            <p>Zack Snyder's Justice League</p>
            <i className="fa-solid fa-download"></i>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-code"></i>
          </div>
        </div>
        <div className="recommend-container">
          <img src={Poster11} className="poster" />
          <p className="posterP">HD</p>
          <p className="posterPmin">149 Min</p>
          <div className="poster-icon">
            <p>Avengers: Infinity War</p>
            <i className="fa-solid fa-download"></i>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-code"></i>
          </div>
        </div>
        <div className="recommend-container">
          <img src={Poster12} className="poster" />
          <p className="posterP">HD</p>
          <p className="posterPmin">126 Min</p>
          <div className="poster-icon">
            <p>I Am a Hero</p>
            <i className="fa-solid fa-download"></i>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-code"></i>
          </div>
        </div>
      </div>

      {/* ------------------------- Recommend-Container2 ------------------------*/}

      <div className={`recommend-movie2 ${activeTab === 1 ? 'visible' : ''}`}>
        <div className="recommend-container2">
          <img src={Poster13} className="poster2" />
          <div className="poster-icon2">
            <p>Alice in Borderland</p>
            <i className="fa-solid fa-download"></i>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-code"></i>
          </div>
        </div>
        <div className="recommend-container2">
          <img src={Poster14} className="poster2" />
          <div className="poster-icon2">
            <p>Lupin</p>
            <i className="fa-solid fa-download"></i>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-code"></i>
          </div>
        </div>
        <div className="recommend-container2">
          <img src={Poster15} className="poster2" />
          <div className="poster-icon2">
            <p>Moving</p>
            <i className="fa-solid fa-download"></i>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-code"></i>
          </div>
        </div>
        <div className="recommend-container2">
          <img src={Poster16} className="poster2" />
          <div className="poster-icon2">
            <p>Mouse</p>
            <i className="fa-solid fa-download"></i>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-code"></i>
          </div>
        </div>
        <div className="recommend-container2">
          <img src={Poster17} className="poster2" />
          <div className="poster-icon2">
            <p>Big Mouth</p>
            <i className="fa-solid fa-download"></i>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-code"></i>
          </div>
        </div>
        <div className="recommend-container2">
          <img src={Poster18} className="poster2" />
          <div className="poster-icon2">
            <p>The Last of Us</p>
            <i className="fa-solid fa-download"></i>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-code"></i>
          </div>
        </div>
        <div className="recommend-container2">
          <img src={Poster19} className="poster2" />
          <div className="poster-icon2">
            <p>From</p>
            <i className="fa-solid fa-download"></i>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-code"></i>
          </div>
        </div>
        <div className="recommend-container2">
          <img src={Poster20} className="poster2" />
          <div className="poster-icon2">
            <p>The Walking Dead</p>
            <i className="fa-solid fa-download"></i>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-code"></i>
          </div>
        </div>
        <div className="recommend-container2">
          <img src={Poster21} className="poster2" />
          <div className="poster-icon2">
            <p>Dark</p>
            <i className="fa-solid fa-download"></i>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-code"></i>
          </div>
        </div>
        <div className="recommend-container2">
          <img src={Poster22} className="poster2" />
          <div className="poster-icon2">
            <p>One Piece</p>
            <i className="fa-solid fa-download"></i>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-code"></i>
          </div>
        </div>
        <div className="recommend-container2">
          <img src={Poster23} className="poster2" />
          <div className="poster-icon2">
            <p>Stranger Things</p>
            <i className="fa-solid fa-download"></i>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-code"></i>
          </div>
        </div>
        <div className="recommend-container2">
          <img src={Poster24} className="poster2" />
          <div className="poster-icon2">
            <p>Game of Thrones</p>
            <i className="fa-solid fa-download"></i>
            <i className="fa-solid fa-play"></i>
            <i className="fa-solid fa-code"></i>
          </div>
        </div>
      </div>
    </>
  )
}