import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootswatch/dist/superhero/bootstrap.min.css';
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route exact path="/books">
            <Saved />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
