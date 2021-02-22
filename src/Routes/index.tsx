import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import PageDefault from '../components/PageDefault';

import Landing from '../pages/Landing';
import SignIn from '../pages/SignIn';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/signin" component={SignIn} />
      {/* <Route path="/test" component={PageDefault} /> */}
    </Switch>
  );
};

export default Routes;
