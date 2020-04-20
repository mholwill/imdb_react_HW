import React, { Component } from 'react'
import FilmItem from './FilmItem';

export default class FilmList extends Component {
  render() {

    const filmNodes = this.props.films.map(film => {
        return <FilmItem name={film.name} key={film.id}></FilmItem>
      })

    return (
      <div className="film-list">
        {filmNodes}
      </div>
    )
  }
}
