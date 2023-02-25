import  React  from "react";
import { useEffect } from "react";
import "./App.css";
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

import { useState } from "react";

const API_URL = "http://www.omdbapi.com/";
const API_KEY = "apikey=9964b854";

const movie1 = {
        "Title": "Superman II",
        "Year": "1980",
        "imdbID": "tt0081573",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODk2NjgzNTEtYzZhZC00ZTBkLTllMGQtMmMxMzU1NDRkM2RlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg"
}

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setsearchTerm] = useState([]);

    const searchMovies = async (title) =>{
        const response = await fetch(`${API_URL}?s=${title}&${API_KEY}`);
        const data = await response.json();
        
        setMovies(data.Search);
    }
    
    return (
        <div className="app">
            <h1>
                MovieLand
            </h1>

            <div className="search">
                <input 
                placeholder="Search for movies" 
                value={searchTerm} 
                onChange={(index)=>setsearchTerm(index.target.value)}>     
                </input>
                <img
                src={SearchIcon}
                alt="Search"
                onClick={()=>searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                ?(
                    <div className="container">
                {
                    movies.map((movie)=>(
                        <MovieCard movie={movie} />
                    ))
                }
            </div>
                ): (
                    <div className="empty">
                        <h2>
                            No Movies Found
                        </h2>
                    </div>
                )
            }
            
        </div>
    );
}

export default App;