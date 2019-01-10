import React, { Component } from "react";
import Film from "../components/Film"

const FilmList = (props) => {
      return (
        <div>
            <ul className="list-group">
               {props.movieList.map(movie => {
                  return <Film key={movie.id} movie={movie} /> 
               })}
            </ul>
        </div>
      );
  }
  
  export default FilmList;