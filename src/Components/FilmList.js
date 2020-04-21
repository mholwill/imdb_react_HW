import React, { Component } from 'react'
import FilmItem from './FilmItem';

export default class FilmList extends Component {
  render() {

    const filmItems = this.props.films.map(film => {
        return <FilmItem name={film.name} url={film.url} key={film.id}></FilmItem>
      })

    return (
      <div className="film-list">
        <ul>
          {filmItems}
        </ul>
      </div>
    )
  }
}
