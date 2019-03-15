import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Menu from "../../src/components/Menu";
import App from "../App";

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/menu" component={Menu} />
      </Switch>
    </Router>
  );
};

/*import React from "react";
import { BrowserRouter, Router, Route, Switch } from "react-router-dom";

export default () => {
  <BrowserRouter>
    <Switch>
      <Route path="/Menu" exact component={props => <Menu {...props} />} />
      <Route path="/Contact" exact component={Contact} />
      <Route path="/Footer" exact component={Footer} />
    </Switch>
  </BrowserRouter>;
};*/
