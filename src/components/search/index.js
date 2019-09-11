import React, { useState } from 'react';
import Axios from 'axios';

import './styles.css';
import NotImage from '../../assets/notimage.png';


export function Search(){
    const [movieName, setMovieName] = useState('');
    const [movieRepo, setMovieRepo] = useState([]);

    async function handleSubmit(e){
        e.preventDefault()
        const response = await Axios.get(`http://api.themoviedb.org/3/search/movie?api_key=b96d17e52fd6d541caf5e2d5ac88fe35&query=${movieName}&language=pt-BR`);
        console.log(response.data.results);
        setMovieRepo(response.data.results);
    }

    return (
        <>
        <div className="form-container">
            <form onSubmit={handleSubmit} className="search-bar">
                <input onChange={e => setMovieName(e.target.value)} className="search-input" placeholder="Digite o Filme que Deseja Buscar"/>
            </form>
        </div>
        <div className="content">
        <div className="main-container">
            {movieRepo.map((movie) => {
                return (
                    <div className="card">
                        {movie.poster_path == null ? 
                        (
                            <img src={NotImage}/>
                        )    
                        : (
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                        )
                    }
                    </div>
                )
            })}
        </div>
        </div>
        </>
    );
}