import React from 'react';
import './Card.css';
function Card({ movieDetails, openYoutube, searchWhereToWatch }) {
    return (
        <div className='card'>
           <div className='movieCard'>
           <div className="image-container" onClick={() => openYoutube(`${movieDetails.Title}`, `${movieDetails.Released}`)}>
                <img src={movieDetails.Poster} alt="Image Not Available" />
            </div>
            <div className="cardText">
                <h1>{movieDetails.Title}</h1>
                <p className="rating">Rating: <span>{movieDetails.imdbRating}/10</span></p>
                <a href="#" onClick={() => searchWhereToWatch(`${movieDetails.Title}`,`${movieDetails.Director}`)}>Where to Watch?</a>
                <p><strong>Genre:</strong> <span>{movieDetails.Genre}</span></p>
                <p><strong>Release:</strong> <span>{movieDetails.Released}</span></p>
                <p><strong>Actors:</strong> <span>{movieDetails.Actors}</span></p>
                <p><strong>Director:</strong> <span>{movieDetails.Director}</span></p>
                <p><strong>Language:</strong> <span>{movieDetails.Language}</span></p>
                <p><strong>Duration:</strong> <span>{movieDetails.Runtime}</span></p>
                <p><strong>Description:</strong> <span>{movieDetails.Plot}</span></p>
            </div>
           </div>
        </div>
    );
}

export default Card;
