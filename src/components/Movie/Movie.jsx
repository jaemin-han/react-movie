import React, { Component } from 'react';
import style from './Movie.css';

export default class Movie extends Component {
  render() {
    return(
      <div className={style['movie-list-item']}>
        <h3>{this.props.title}</h3>
        <img src={this.props.poster} alt="Movie Poster"/>
        <button id={style["delete-button"]} onClick={() => this.props.handleDelete(this.props.id)}>REMOVE</button>
      </div>
    )
  }
}
