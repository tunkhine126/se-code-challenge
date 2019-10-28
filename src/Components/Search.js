import React, { Component } from 'react'
import { Form, FormControl, Button } from "react-bootstrap"

class Search extends Component {


  render() {
    return (
      <div>
        <div className="searchForm"> 
          <Form.Group controlId="formBasicSearch">
            <Form.Label>xkcd Webcomic Search</Form.Label>
            <Form inline>
              <FormControl type="text" name="search" placeholder="Enter Comic Number" className="searchInput" />
              <Button type="submit" variant="outline-primary" className="searchSubmit">Search</Button>
            </Form>
          </Form.Group>
        </div>
      </div>
    )
  }
}

export default Search;