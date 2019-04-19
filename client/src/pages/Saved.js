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
                    <div className="ui vertical stripe quote segment">
                    <div className="ui equal width stackable internally celled grid">
                      <div className="center aligned row">
                        <div className="column">
                        <h1>There are no books saved!</h1>
                        </div>  
                      </div>
                    </div>
                  </div>
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