import React, { Component } from "react";

import SearchBar from "../components/SearchBar/SearchBar"
import GridCard from "../components/GridCard/GridCard"
import API from "../utils/API";


class Search extends Component {
    state = {
        searchQuery: "",
        books: []
      };
    
      googleBooks = (query) => {
        API.searchBooks(query)
          .then(res => {
            console.log(res.data.items)
              this.setState({ books: res.data.items }, ()=> {
              })
          })
          .catch(err => console.log(err));
      };
    
      handleInputChange = event => {
        let value = event.target.value;
        let name = event.target.name;
    
        this.setState({
          [name]: value
        });
      };
    
      handleSubmitSearch = event => {
        event.preventDefault();
        this.googleBooks(this.state.searchQuery)
    
        this.setState({
          searchQuery: ""
        });
      };
    
    render() {
        return(
            <div>
                <SearchBar
                  searchQuery={this.state.searchQuery}
                  books={this.state.books}
                  handleInputChange={this.handleInputChange}
                  handleSubmitSearch={this.handleSubmitSearch}
                 />

              {!this.state.books.length ? (
                <h1 className="text-center">No Books Searched Yet</h1>
              ) : (
                  this.state.books.map(book => {
                    return (
                      <GridCard
                        key={book.id}
                        bookId={book.id}
                        title={book.volumeInfo.title}
                        authors={book.volumeInfo.authors}
                        description={book.volumeInfo.description}
                        image={book.volumeInfo.imageLinks.smallThumbnail}
                        link={book.volumeInfo.infoLink}
                        type="save"
                      />
                    );
                  })
   
              )}
              
            </div>
        );
    }
}

export default Search;