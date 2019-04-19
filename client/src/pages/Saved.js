import React, { Component } from 'react';
import GridCard from '../components/GridCard/GridCard';
import API from "../utils/API";

class Saved extends Component {
    state = {
      books: [],
    }

      componentDidMount() {
        this.displaySavedBooks();
      }
    
      displaySavedBooks = () => {
        API.getAllBooks()
          .then(res => {
            console.log(res.data)
            this.setState({ books: res.data })
          })
          .catch(err => console.log(err));
      };    

    render() {
        return(
            <div>
            {!this.state.books.length ? (
                <h1 className="text-center">No Books Searched Yet</h1>
              ) : (
                  this.state.books.map(book => {
                    return (
                      <GridCard
                        redisplay={this.displaySavedBooks}
    
                        key={book._id}
                        bookId={book._id}
                        title={book.title}
                        authors={book.authors}
                        description={book.description}
                        image={book.image}
                        link={book.link}
                        type="delete"
                      />
                    );
                  })
   
              )}

            </div>
        );
    }
}

export default Saved;