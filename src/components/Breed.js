import React, { Component } from "react";
import "./Breeds.css";

class Breeds extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const listOfBreeds = Object.keys(this.props.breeds);
    const breedItems = listOfBreeds.map((breedName, index) => (
      <div key={index}>
        <div onClick={() => this.props.getSelectedBreed(breedName)}>
          <p
            className="breed-name"
            onClick={() => this.props.getSelectedBreed(breedName)}
          >
            {breedName}
          </p>
        </div>
      </div>
    ));
    return (
      <div>
        <div className="breed-container">{breedItems}</div>
      </div>
    );
  }
}

export default Breeds;
