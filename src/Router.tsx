import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HelloWorld from './pages/HelloWorld/HelloWorld';
import HomePage from './pages/Home';

const Router = () => {
  return (
    <Switch>
      <Route exact path={"/"} component={HomePage} />
      <Route path={"/HelloWorld"} component={HelloWorld} />
    </Switch>
  );
}

export default Router;