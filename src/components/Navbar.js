import React, { useState } from 'react';
import './Navbar.css'
function Navbar({ getData})  {
    const [movie, setMovie] = useState("");

    function changeHandler(event) {
        setMovie(event.target.value);
    }

    function clickHandler() {
        getData(movie);
    }

    return (
        <nav className="nav">
            <div className="logo">
                <h1>Get all the details about your Movie!!!</h1>
            </div>
            <div className="searchBar">
                <input type="text" className="search-input" placeholder="Search here" onChange={changeHandler} />
                <button className="search-btn" onClick={clickHandler}>Search</button>


            </div>
        </nav>
    );
}

export default Navbar;
