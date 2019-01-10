import React from "react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500/";

const Film = (props) => {
    return (
        <div>      
           <li className="list-group-item">
            <div className="media">
                <div className="media-left">
                    <img className="media-object img-rounded" width="100px" height="100px" src={`${IMAGE_BASE_URL}${props.movie.poster_path}`} alt="film"/>
                </div>
                <div className="media-body">
                    <h5 className="title_list_item">{props.movie.title}</h5>
                    <h5 className="title_list_item">Note du film: {props.movie.vote_average} / 10</h5>
                </div>
            </div>
            </li> 
        </div>
    )
}

export default Film;