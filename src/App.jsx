import React from "react";
import "./app.scss";
import Home from "./pages/home/Home";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";
import News from "./pages/news/News";

const App = () => {
  const { user } = useContext(AuthContext);
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
