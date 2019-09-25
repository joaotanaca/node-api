import React from 'react';
import {BrowserRouter, Switch, Router} from 'react-router-dom';

import Main from './page/main/index';

const Routes = () =>(
  <BrowserRouter>
    <Switch>
      <Router path="/" component={Main} />
    </Switch>
  </BrowserRouter>
);
export default Routes;