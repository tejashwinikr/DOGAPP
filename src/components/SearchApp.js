import React, { Component } from "react";
import "./searchApp.css";
import Select from "./Select";
import BreedImage from "./BreedImage";
import DogApi from "./DogApi.png";
import Oip from "./images/Oip.jpg";

class SearchApp extends Component {
  state = {
    breedsList: null,
    selectedBreed: null,
    error: false,
  };
  componentDidMount() {
    this.fetchAllBreeds();
  }
  fetchAllBreeds = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/list/all");
      if (response.ok) {
        const data = await response.json();
        this.setState({
          breedsList: Object.keys(data.message),
        });
      } else {
        this.setState({
          error: true,
        });
        alert("Sorry, can not display the data");
      }
    } catch (e) {
      this.setState({
        error: true,
      });
      alert("Sorry, can not display the data");
    }
  };
  selectHandler = (breed) => {
    this.setState({
      selectedBreed: breed,
    });
  };
  render() {
    console.log(this.state.selectedBreed);
    return (
      <div className="App">
        <h2> Welcome to the DOG WORLD</h2>
        <div class="container">
          <div class="sidebar">
            <img src={DogApi} alt="Dogpic" height="350px" width="250px"></img>
            <img src={Oip} alt="Dogpic" height="350px" width="250px"></img>
          </div>
          <div class="maxbar">
            <h3>Select a Breed to View a Dog Picture</h3>

            <Select
              breedsList={this.state.breedsList}
              onSelect={this.selectHandler}
              isError={this.state.error}
            />
            <BreedImage breed={this.state.selectedBreed} />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchApp;
