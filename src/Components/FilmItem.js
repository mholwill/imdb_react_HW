import React, { Component } from 'react'

export default class FilmItem extends Component {
  render() {
    return (
      <div className="film-item">
        <li>{this.props.name}</li>
      </div>
    )
  }
}
