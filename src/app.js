import React from "react";
import { Switch, Route } from "react-router-dom";
import SearchContainer from "./containers/SearchContainer";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={SearchContainer} />
    </Switch>
  );
};

export default App;
