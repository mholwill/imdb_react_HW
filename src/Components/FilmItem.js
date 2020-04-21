import React, { Component } from 'react'

export default class FilmItem extends Component {

  render() {
    return (
      <div className="film-item">
        <li><a href={this.props.url}>{this.props.name}</a></li>
      </div>
    )
  }
}

