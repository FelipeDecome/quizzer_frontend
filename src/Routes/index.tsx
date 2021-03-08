import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { SignIn } from '../pages/UserForms/SignIn';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
    </Switch>
  );
};

export default Routes;
