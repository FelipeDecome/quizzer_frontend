import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TestPage from '../pages/TestPage';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={TestPage} />
      {/* <Route path="/test" component={PageDefault} /> */}
    </Switch>
  );
};

export default Routes;
