import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import {movies} from './movies'
import Movie from './movie';


const MovieList = () => {
    return ( <>
    <h1>Netflix best movies</h1>
    <section className='movielist'>
        {movies.map((movie, index) => {
            return <Movie {...movie} number={index}
            key={movie.id} />;
        })}
    </section>
    </>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<MovieList />)