import React, { Component } from "react";
import DogList from "./dogList.js";
import "./nav.css";
import "./dogApp.css";
import DogApi from "./DogApi.png";
import Oip from "./images/Oip.jpg";

class DogApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogs: [],
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random/30")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ dogs: data.message });
      });
  }

  render() {
    return (
      <div>
        <h1>Welcome to the Dog World</h1>
        <div class="container">
          <div class="sidebar">
            <img src={DogApi} alt="Dogpic" height="350px" width="250px"></img>
            <img src={Oip} alt="Dogpic" height="350px" width="250px"></img>
          </div>

          <div class="maxbar">
            <h2>Different dog images for you</h2>
            <br></br>
            <DogList dogs={this.state.dogs} />
          </div>
        </div>
      </div>
    );
  }
}

export default DogApp;
