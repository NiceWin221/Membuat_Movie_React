import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './download.css';
import { Navigate } from "react-router-dom";

export default function Download() {
  const { movieID } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  const navigate = useNavigate()

  const handlePlayClick = () => {
    navigate(`/play/${movieDetails.imdbID}`)
  }

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
    <div className="download-link">
      <div className="download-poster">
        <div className="download-poster-details">
          {movieDetails && movieDetails.Poster && <img src={movieDetails.Poster} />}
          <div className="download-poster-details-p">
            <p>Video Quality:</p>
            <p className="hdp">HD</p>
          </div>
        </div>
        <div className="watch-online">
          <p onClick={() => handlePlayClick()}><i className="fa-solid fa-video"></i> Watch Online</p>
        </div>
        <div className='poster-spesifik2'>
          {movieDetails && (
            <>
              <p>IMDB Rate: <span style={{ color: '#1890ff' }}>{movieDetails.imdbRating}</span></p>
              <p>Genres: <span style={{ color: '#1890ff' }}>{movieDetails.Genre}</span></p>
              <p>Year: <span style={{ color: '#1890ff' }}>{movieDetails.Year}</span></p>
              <p>Language: <span style={{ color: '#1890ff' }}>{movieDetails.Language}</span></p>
              <p>Run Time: <span style={{ color: '#1890ff' }}>{movieDetails.Runtime}</span></p>
            </>
          )}
        </div>
      </div>
      <div className="download-details">
        <h1>
          Download: {movieDetails && movieDetails.Title}
        </h1>
        <div className="download-detailsp">
          <p>Storyline</p>
          {movieDetails && movieDetails.Plot}
        </div>
        <h1 className="notfound">Sorry, download links not found!</h1>
      </div>
    </div>
  );
}
