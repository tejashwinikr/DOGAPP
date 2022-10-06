import React from "react";
import { Switch, Route, Redirect, useEffect } from "react-router";
import Nav from "./components/Nav";
import BreedApp from "./components/BreedApp";
import SearchApp from "./components/SearchApp";
import DogApp from "./components/DogApp";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={DogApp} />

        <Route
          exact
          path="/breed-app"
          render={() => {
            return <BreedApp />;
          }}
        />

        <Route
          exact
          path="/search-app"
          render={() => {
            return <SearchApp />;
          }}
        />

        <Redirect to="/" />
      </Switch>
    </div>
  );
}
