import React from "react";
import Dog from "./Dog";
import "./nav.css";

const DogList = (props) => {
  const dogsArray = props.dogs.map((dogURL) => {
    return <Dog url={dogURL} />;
  });

  return <div className="dogcontainer">{dogsArray}</div>;
};

export default DogList;
