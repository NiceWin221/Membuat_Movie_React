import './playmovie.css'
import React, { useState, useEffect } from "react";
import RickRoll from './Videos/rick-roll.mp4'
import { useNavigate, useParams } from "react-router-dom";
import { Navigate } from 'react-router-dom';

function PlayMovie() {
  const [server, setServer] = useState(false)
  const [serverName, setServerName] = useState('Server HD 1')

  function handleServerDown() {
    setServer(!server);
  }

  function handleServerName(name){
    setServerName(name)
  }
  
  const serverDown = {
    opacity: server ? 1 : 0,
    zIndex: server ? '3' : '-1',
    top: server ? '199px' : '160px'
  }

  const [rickRoll, setRickRoll] = useState(false)

  const handleRickRoll = () => {
    setRickRoll(!rickRoll)
  }

  const navigate = useNavigate()
  const handleDownloadClick = () => {
    navigate(`/download/${movieDetails.imdbID}`);
  };
  
  const { movieID } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  useEffect(() => {
    // Fetch movie details using the movieID
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=dca61bcc&i=${movieID}`);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [movieID]);

  return (
    <>
      {movieDetails ? (
        <div className='playmovie'>
          <h1>Watch {movieDetails.Title} ({movieDetails.Year})</h1>
          <div className="overview">
            <div className='server'>
              <p className='serverp'>{movieDetails.Title}</p>
              <div className='serveri' onClick={handleServerDown}>
                <i className="fa-solid fa-server"></i> {serverName} <i className="fa-solid fa-arrow-down"></i>
              </div>
              <div className='server-down' style={serverDown}>
                <p onClick={() => {handleServerName('Server HD 1'); handleServerDown()}} style={serverDown}>Server HD 1 <i className="fa-solid fa-circle"></i></p>
                <p onClick={() => {handleServerName('Server HD 2'); handleServerDown()}} style={serverDown}>Server HD 2 <i className="fa-solid fa-circle"></i></p>
                <p onClick={() => {handleServerName('Server HD 3'); handleServerDown()}} style={serverDown}>Server HD 3 <i className="fa-solid fa-circle"></i></p>
                <p onClick={() => {handleServerName('Server HD 4'); handleServerDown()}} style={serverDown}>Server HD 4 <i className="fa-solid fa-circle"></i></p>
              </div>
            </div>
            <div className='poster-overview'>
              <img src={movieDetails.Poster} />
              <i
                className="fa-solid fa-play"
                onClick={handleRickRoll}
                style={{ display: rickRoll ? 'none' : '' }}
              ></i>
              <video
                src={RickRoll}
                controls
                autoPlay={rickRoll}
                style={{ display: rickRoll ? '' : 'none', height: '405px'}}
              ></video>
            </div>
            <div className="active-download">
              <p>Active: <p style={{ color: '#1890ff', display: 'inline' }}>{movieDetails.imdbID}</p></p>
              <p className='active-downloadi' onClick={handleDownloadClick}><i className="fa-solid fa-download"></i> Download</p>
            </div>
          </div>
          <div className="plot-movie">
            <h1>Overview</h1>
            <p>{movieDetails.Plot}</p>
          </div>
          <div className="vip">
            <p>Movies atau TV Shows tidak bisa diputar? Silahkan pilih server lainnya. <p style={{ color: '#ffcf00', display: 'inline' }}>Gunakan Server HD1 dan pilih Server Vip 3 untuk subtitle lengkap,</p> Jika anda mempunyai file subtitle sendiri <p style={{ color: '#0be881', display: 'inline' }}>silahkan gunakan server Vip 1</p>, atau <p style={{ color: '#ffcf00', display: 'inline' }}>Gunakan Server HD 4</p> / <p style={{ color: '#0be881', display: 'inline' }}>Hydrax atau Doodstream</p> utk film lokal terbaru dan serial mandarin, terimakasih.</p>
          </div>
          <div className="poster-detail">
            <div className="poster-detail-hd">
              <img src={movieDetails.Poster} />
              <div className='posterhd'>
                <p>Video Quiality: </p>
                <p className='posterhdhd'>HD</p>
              </div>
            </div>
            <div className="watch-trailer">
              <p><i className="fa-solid fa-video"></i> Watch Trailer</p>
            </div>
            <div className='poster-spesifik'>
              <p>IMDB Rate: <p style={{ color: '#1890ff', display: 'inline' }}>{movieDetails.imdbRating}</p></p>
              <p>Genres: <p style={{ color: '#1890ff', display: 'inline' }}>{movieDetails.Genre}</p></p>
              <p>Year: <p style={{ color: '#1890ff', display: 'inline' }}>{movieDetails.Year}</p></p>
              <p>Language: <p style={{ color: '#1890ff', display: 'inline' }}>{movieDetails.Language}</p></p>
              <p>Run Time: <p style={{ color: '#1890ff', display: 'inline' }}>{movieDetails.Runtime}</p></p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default PlayMovie;