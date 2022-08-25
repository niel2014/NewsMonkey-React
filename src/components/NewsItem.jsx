import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, url } = this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{minHeight:"447px"}}>
          <img src={imageUrl} alt="image" />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={url} target="_blank" className="btn btn-sm btn-primary">Read More </a>
          </div>
        </div>
      </div>
    )
  }
}
