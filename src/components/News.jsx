import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      isLoading: false
    }
  }

  async componentDidMount(){
    const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=26eb3cdd7b2944fbb10579eec5c70be9";
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({articles: parsedData.articles});
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className='text-center'>NewsMonkey - Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            console.log(element)
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title? element.title.slice(0,60):""} description={element.description? element.description.slice(0,110):""}
                imageUrl={element.urlToImage} url={element.url} author={element.author} source={element.source.name} />
            </div>
          })}

        </div>
        <div className="flex my-3" style={{justifyContent: "space-between"}}>
        <button className='btn btn-primary btn-sm'>Prev </button>
        <button className='btn btn-primary btn-sm'>Next </button>
        </div>
      </div>
    )
  }
}