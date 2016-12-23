import React, { Component } from 'react';
import Movie from '..Movie/Movie.jsx';
import style from './SearchContainer.css';

export default class SearchContainer extends Component {

  checkInputTitle() {
    if (this.props.searched) {
      return (
        <div key="search-result" className={style["movie"]}>
          <h3>{this.props.title}</h3>
          <img src={this.props.poster} alt="Movie Poster"/>
        </div>
      )
    } else {
      return (<div></div>)
    }
  }

  render() {
    return(
      <div id={style["search-container"]}>
        {this.checkInputTitle}
      </div>
    )
  }
}
