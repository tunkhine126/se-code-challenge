import React, { Component } from 'react'

const URL = 'https://xkcd.now.sh/?comic=latest'

class Home extends Component {

  state = {
    latestComic: []
  }

  componentDidMount() {
    this.fetchLatest()
  }

  fetchLatest = () => {
    fetch(URL)
      .then(res => res.json())
      .then(data => this.setState({ latestComic: data }))
  }

  render() {
    const comic = this.state.latestComic
    
    return (
      <div>
        <img className="latestImage" src={comic.img} title={comic.alt} alt={comic.title} />
      </div>
    )
  }
}

export default Home;