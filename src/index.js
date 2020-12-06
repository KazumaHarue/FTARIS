import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import TopPage from "./components/TopPage";


const app = document.getElementById("root");

// ReactDOM.render(<App />, app);
ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <TopPage />
      </Route>
      {/* <Route path="/battle">
        <BattlePage />
      </Route> */}
    </Switch>
  </Router>,
  app
);

serviceWorker.unregister();
