import React, { Component } from 'react';
import axios from 'axios';
import FilmList from './containers/FilmList';

const API_END_POINT = 'https://api.themoviedb.org/3/movie/popular?page=1&api_key=';
const API_END_POINT_UPCOMMING = 'https://api.themoviedb.org/3/movie/upcoming?page=1?api_key=';
const API_KEY = 'f1be4bafe6f7cb0cb84f5948c5b75497';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { movieList: [] };
  }

  componentWillMount() {
    this.initMoviesPopular();
  }

  initMoviesPopular() {
    // Récupération de tous les films populaires
    axios.get(`${API_END_POINT}${API_KEY}`).then((response) => {
      this.setState({ movieList: response.data.results }, () => {
      });
    });
  }

  initMoviesUpcoming() {
    // Récupération de tous les films qui sortent prochainement
    axios.get(`${API_END_POINT_UPCOMMING}${API_KEY}`).then((response) => {
      this.setState({ movieList: response.data.results }, () => {
      });
    });
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div>
        <header>
          <div className="navbar navbar-dark bg-dark shadow-sm">
            <div className="container">
              <div className="col-md-2">
                <a href="#">
                  <strong>Films Populaires</strong>
                </a>
              </div>
              <div className="col-md-2">
                <a href="#">
                  <strong>Prochainement</strong>
                </a>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <FilmList movieList={this.state.movieList} />
        </div>
      </div>

    );
  }
}

export default App;
