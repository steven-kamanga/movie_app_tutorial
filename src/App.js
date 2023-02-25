import  React  from "react";
import "./App.css";
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

import { useState } from "react";

const API_URL = "http://www.omdbapi.com/";
const API_KEY = "apikey=9964b854";

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