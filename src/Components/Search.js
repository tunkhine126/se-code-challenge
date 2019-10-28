import React, { Component } from 'react'
import { Form, FormControl, Button } from "react-bootstrap"


class Search extends Component {

  state= {
    userSearched: []
  }

  fetchSearch = (e) =>{
    const input = e.target.search.value
    e.preventDefault()
    console.log(e.target.search.value)
    fetch(`https://xkcd.now.sh/?comic=${input}`)
    .then(res => res.json())
    .then(data => this.setState({ userSearched: data }))
    .then(e.target.reset())
  }

  render() {
    // {console.log(this.state.userSearched)}
    const searched = this.state.userSearched

    return (
      <div>
        {/* // Form */}
        <div className="searchForm"> 
          <Form.Group controlId="formBasicSearch">
            <Form.Label>xkcd Webcomic Search</Form.Label>
            <Form inline onSubmit={(e) => this.fetchSearch(e)}>
              <FormControl type="text" name="search" placeholder="Enter Comic Number" className="searchInput" />
              <Button type="submit" variant="outline-primary" className="searchSubmit">Search</Button>
            </Form>
          </Form.Group>
          {/* // Image */}
          <img className="searchImage" src={searched.img} title={searched.alt} alt={searched.title} />
        </div>
      </div>
    )
  }
}

export default Search;