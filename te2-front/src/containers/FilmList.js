import React from 'react';
import Film from '../components/Film';

const FilmList = props => (
  <div>
    <ul className="list-group">
      {props.movieList.map(movie => <Film key={movie.id} movie={movie} />)}
    </ul>
  </div>
);

export default FilmList;
