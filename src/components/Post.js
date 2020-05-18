import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Post extends Component {
  render() {
    let title = this.props.question.title
    return (
      <Link className="no-underline ma1" to={`/question/${this.props.question.id}`}>
        <h2 className="f3 black-80 fw4 lh-solid">{title}</h2>
        <p className="black-80 fw3">{this.props.question.options}</p>
      </Link>
    )
  }
}
