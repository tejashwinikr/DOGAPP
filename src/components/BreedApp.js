import React, { Component } from "react";
import "./BreedApp.css";
import Breeds from "./Breed";
import DogApi from "./DogApi.png";
import Oip from "./images/Oip.jpg";

class BreedApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breedName: "",
      breeds: [],
      hasErrors: false,
    };
  }

  getSelectedBreed = (breedName) => {
    this.setState({
      breedName: breedName,
    });
    this.selectBreed(breedName); //Missing breedName in your code
  };

  selectBreed = (breedName) => {
    console.log("breedName:", breedName);
    fetch(`https://dog.ceo/api/breed/${breedName}/images/random/3`)
      .then((res) => res.json())
      .then((breed) => this.setState({ getSelectedBreed: breed.breedName }))
      .catch(() => this.setState({ hasErrors: true }));
  };

  componentDidMount() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
      .then((res) => res.json())
      .then((data) => this.setState({ breeds: data.message }))
      .catch(() => this.setState({ hasErrors: true }));
  }

  render() {
    console.log("breed", this.state.breedName);
    return (
      <div>
        <h1>Welcome to the Dog world</h1>
        <div class="container">
          <div class="sidebar">
            <img src={DogApi} alt="Dogpic" height="350px" width="250px"></img>
            <img src={Oip} alt="Dogpic" height="350px" width="250px"></img>
          </div>
          <div class="maxbar">
            <h2>List of DOG BREEDS for you</h2>
            <br></br>
            <Breeds
              breeds={this.state.breeds}
              getSelectedBreed={this.getSelectedBreed}
            />
          </div>
        </div>{" "}
      </div>
    );
  }
}

export default BreedApp;
