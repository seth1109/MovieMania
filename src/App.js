import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import './App.css';
import Start from './Start';
function App() {
    const [searched, setSearched] = useState(false);

    const [movieDetails, setMovieDetails] = useState({
        Poster: "",
        Title: "",
        imdbRating: "",
        Genre: "",
        Released: "",
        Actors: "",
        Director: "",
        Language: "",
        Runtime: "",
        Plot: "",
    });

    const getData = async (movie) => {
        try {
            let fetchData = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=5aaf899f&t=${movie}`);
            let res = await fetchData.json();
            setMovieDetails(res);
        } catch {
            console.error('No Such Movie Could be Found');
        }
        setSearched(true);
    }
    useEffect(() => {
      console.log(movieDetails);
    }, [movieDetails]);
    
    const openYoutube = (title, released) => {
        const searchString = encodeURIComponent(`${title} ${released} trailer`);
        window.open(`https://www.youtube.com/results?search_query=${searchString}`, '_blank');
    };

    const searchWhereToWatch = (title, director) => {
        const searchQuery = encodeURIComponent(`where to watch ${title} by ${director}`);
        window.open(`https://www.google.com/search?q=${searchQuery}`, '_blank');
    };

    return (
<div className="App">
<Navbar getData={getData}  />
           {searched?<Card
                movieDetails={movieDetails}
                openYoutube={openYoutube}
                searchWhereToWatch={searchWhereToWatch}
            /> : <Start/>}
        </div>
    );
}

export default App;
