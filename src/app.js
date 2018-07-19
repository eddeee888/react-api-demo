import React from "react";
import { Switch, Route } from "react-router-dom";
import SearchPage from "./pages/search/search.js";

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={SearchPage} />
    </Switch>
  );
};

export default App;
