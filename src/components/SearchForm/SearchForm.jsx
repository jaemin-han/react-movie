import React, {Component} from 'react';
import style from './SearchForm.css';

 export default class SearchForm extends Component {
  render() {
    return(
      <div id={style["search-form"]}>
        <input id={style["input"]}
          type="text"
          placeholder="Movie Title"
          onChange={this.props.handleInput}
        />

        <button id={style["button"]}> onClick={this.props.handleClick}> SEARCH </button>
        <button id={style["save"]}> onClick={this.props.handleSave}> SAVE IT </button>
      </div>
    )
  }
}
