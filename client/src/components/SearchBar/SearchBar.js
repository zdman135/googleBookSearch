import React from "react";

function SearchBar(props) {
  return(
    <div className="ui segment">
    <div className="ui text container">
      <div className="ui header center aligned segment">
        <h2>Book Search</h2>

        <div className="ui small form">
            <div className="one fields">
                <div className="field">
                    <input
                     style={{width:'655px'}}
                     value={props.searchQuery}
                     name="searchQuery"
                     onChange={props.handleInputChange}
                     type="text"
                     placeholder="Search Books On Google"
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