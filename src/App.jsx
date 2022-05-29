import React from "react";
import "./app.scss";
import Home from "./pages/home/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import News from "./pages/news/News";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
      </Switch>
      {/* <Footer/> */}
    </Router>
  );
};

export default App;
