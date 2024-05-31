import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import logo from './images/logo.png'
import './navbar2.css'

function Navbar() {
  const navigate = useNavigate()
  
  const handlePlayClick = (movie) => {
    navigate(`/play/${movie.imdbID}`);
  };
  
  const handleMovieClick = (imdbID) => {
    setSelectedMovieID(imdbID);
  };
  
  const handleDownloadClick = (e) => {
    if (e) {
      navigate(`/download/${e}`);
    } else {
      console.error("imdbID is undefined");
    }
  };
  
  const [isInputActive, setInputActive] = useState(false);

  const handleInputFocus = () => {
    setInputActive(true);
  };

  const handleInputBlur = () => {
    setInputActive(false);
  };

  const handleInputKeyDown = (e) => {
    if (isInputActive) {
      e.preventDefault();
    }
  };

  const [active, setActive] = useState(false)
  const [isOverlay, setIsOverlay] = useState(false)

  const handleOverlay = () => {
    setIsOverlay(!isOverlay)
  }

  const overlay = {
    transform: isOverlay ? "translateY(0)" : "translateY(-100%)"
  };

  //------------------------------------ Fetch API ----------------------------------//

  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [delayedSearchQuery, setDelayedSearchQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      // Fetch search results
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=dca61bcc&s=${delayedSearchQuery}`);
        const data = await response.json();

        if (data.Search) {
          // If there are search results, fetch additional details for each movie
          const movieDetailsPromises = data.Search.map(async (movie) => {
            const movieResponse = await fetch(`http://www.omdbapi.com/?apikey=dca61bcc&i=${movie.imdbID}`);
            const movieData = await movieResponse.json();
            return movieData;
          });

          const moviesWithDetails = await Promise.all(movieDetailsPromises);
          setMovies(moviesWithDetails);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (delayedSearchQuery) {
      fetchData();
    }
  }, [delayedSearchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    // Set a delay before updating the delayedSearchQuery state
    setTimeout(() => {
      setDelayedSearchQuery(event.target.value);
    }, 2000); // Adjust the delay time (in milliseconds) as needed
  };

  //------------------------------------ Movie Details ---------------------------------//

  const [selectedMovieID, setSelectedMovieID] = useState(null);

  const closeModal = () => {
    setSelectedMovieID(null);
  };


  return (
    <>
      <div className="nav-bar">
        <div className='input'>
          <input
            type="text"
            placeholder="Search movie"
            onClick={handleOverlay}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onKeyDown={handleInputKeyDown}
          />
        </div>
        <div className="glass"><i className="fa-solid fa-magnifying-glass"></i></div>
        <span className="bars"><i className="fa-solid fa-bars"></i></span>
        <img src={logo} />
        <span className="house2" onClick={() => navigate('/')}><i className="fa-solid fa-house"></i>Home</span>
        <span className="movies" href="/about"><i className="fa-solid fa-film"></i>Movies</span>
        <span className="shows">
          <i className="fa-solid fa-tv"></i>TV Shows
        </span>
        <div className="request">
          <div className="fa-solid fa-plus requesti"></div>Request
        </div>
      </div>
      <div className="overlay" style={overlay}>
        <input type="text" className='search-movie' placeholder='Type to search' value={searchQuery} onChange={handleSearchInputChange} />
        <div className="movie-list">
          {
            movies.map((movie) => (
              <div
                key={movie.imdbID}
                className='movie-container'
              >
                <img src={movie.Poster} alt={movie.Title} className='movie-poster' />
                <p className='movie-hd'>HD</p>
                <p className='movie-year'>{movie.Type}</p>
                <div className='movie-details'>
                  <p className='movie-title'>{movie.Title}</p>
                  <i className="fa-solid fa-download" onClick={() => handleDownloadClick(movie.imdbID)}></i>
                  <i className="fa-solid fa-play" onClick={() => handlePlayClick(movie)}></i>
                  <i className="fa-solid fa-code" onClick={() => handleMovieClick(movie.imdbID)}></i>
                </div>
              </div>
            ))
          }
          {selectedMovieID && (
            <div className="modal">
              <p>Movie - Series Detail</p>
              <button onClick={closeModal} className="fa-solid fa-x close-modal"></button>
              {movies.map((movie) => {
                if (movie.imdbID === selectedMovieID) {
                  return (
                    <div key={movie.imdbID} className='detail'>
                      <img src={movie.Poster} />
                      <div className='detailP'>
                        <h1>{movie.Title} ({movie.Year})</h1>
                        <br />
                        <br />
                        <b>Director : <p style={{ display: 'inline' }}>{movie.Director}</p></b>
                        <br />
                        <br />
                        <b>Actors : <p style={{ display: 'inline' }}>{movie.Actors}</p></b>
                        <br />
                        <br />
                        <b>Writer : <p style={{ display: 'inline' }}>{movie.Writer}</p></b>
                        <br />
                        <br />
                        <b className='detail-plot'>Plot : <p>{movie.Plot}</p></b>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          )}
        </div>
        <i className="fa-solid fa-x close-x" onClick={handleOverlay}></i>
      </div>
    </>
  )
}

export default Navbar 