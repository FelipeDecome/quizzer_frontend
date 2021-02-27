import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import PageDefault from '../components/PageDefault';

import Landing from '../pages/Landing';
import SignIn from '../pages/Sign/SignIn';
import SignUp from '../pages/Sign/SignUp';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/entrar" component={SignIn} />
      <Route path="/registro" component={SignUp} />
      {/* <Route path="/test" component={PageDefault} /> */}
    </Switch>
  );
};

export default Routes;
