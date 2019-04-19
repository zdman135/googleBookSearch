import React from "react";

function SearchBar(props) {
  return(
    <div className="ui vertical stripe quote segment">
    <div className="ui equal width stackable internally celled grid">
      <div className="center aligned row">
        <h2>Book Search</h2>
                    
        <div className="ui small form">
            <div className="one fields">
                <div className="field">
                    <label>Book</label>
                    <input
                     value={props.searchQuery}
                     name="searchQuery"
                     onChange={props.handleInputChange}
                     type="text"
                     placeholder="Search Book On Google"
                      />
                </div>
            </div>
            <div
              className="ui submit button"
              onClick={props.handleSubmitSearch}>Search</div>
        </div>

      </div>
    </div>
  </div>

      );
}

export default SearchBar;