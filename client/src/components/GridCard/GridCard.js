import React, {Component} from 'react';
import './GridCard.css';
import API from '../../utils/API';

class GridCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bookId: props.bookId,
      title: props.title,
      authors: props.authors,
      description: props.description,
      image: props.image,
      link: props.link,
      saved: false,
      type: props.type
    }

    this.deleteBook = event => {
      event.preventDefault();
      API.deleteBook(this.state.bookId).then(res => {
        console.log(res.data);
        props.redisplay()
      }).catch(err => console.log(err));
    }      
  }

  saveBook = event => {
    event.preventDefault();
    if (this.state.title) {
      API.findBook(this.state.bookId).then(res => {
        if(res.data) {
        } else {

          API.saveBook({
            bookId: this.state.bookId,
            title: this.state.title,
            authors: this.state.authors,
            description: this.state.description,
            image: this.state.image,
            link: this.state.link
          })
            .then(res => {
              console.log(res.data)
              this.setState({ saved: true })

            })
            .catch(err => console.log(err));

        }
      }).catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="ui vertical stripe quote segment">
      <div className="ui equal width stackable internally celled grid">
        <div className="center aligned row">
          <div className="column">
            <h3>{this.state.title}</h3>
            <p>{this.state.description}</p>
          </div>
          <div className="column">
            {this.state.authors && (
              <div className="ui list">
                <div className="item">
                  <div className="header">Authors:</div>
                </div>
                {
                  this.state.authors.map(author => {
                    return(
                      <div key={author} className="item">
                      {author}
                    </div>
                    )
                  }) 
                }
              </div>
              )}
            <p>
              <img src={this.state.image} className="ui image" alt="book" />
            </p>

            <button className="ui left attached button"><a className="header" href={this.state.link}>View Details</a></button>

            {this.state.type === "save" ? (
              this.state.saved ? <button className="right attached ui button">Saved</button>: <button className="right attached ui button" onClick={this.saveBook}>Save</button>
              ) : (
                <button className="right attached ui button" onClick={this.deleteBook}>Delete</button>
              )}

          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default GridCard;

