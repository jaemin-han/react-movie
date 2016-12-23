import React, { Component } from 'react';
import style from './MovieContainer.css';
import Movie from '../Movie/Movie.jsx';

export default class MovieContainer extends Component {

  componentWillMount() {
    this.props.getAllMovies();
  }

  renderAllMovies() {
    return this.props.showing.map((movie, index) =>
      <Movie
        id={movie.movie_id}
        key={index}
        title={movie.title}
        poster={movie.title}
        handleDelete={this.props.handleDelete}
      />
    );
  }

  render() {
    return(
      <div id={style['movie-list-container']}>
        {this.renderAllMovies()}
      </div>
    )
  }
}
