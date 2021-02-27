import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import PageDefault from '../components/PageDefault';

import Landing from '../pages/Landing';
import SignIn from '../pages/FormPages/SignIn';
import SignUp from '../pages/FormPages/SignUp';
import ForgotPassword from '../pages/FormPages/ForgotPassword';
import ResetPassword from '../pages/FormPages/ResetPassword';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/entrar" component={SignIn} />
      <Route path="/registro" component={SignUp} />
      <Route path="/senha/esqueci" component={ForgotPassword} />
      <Route path="/senha/recuperar" component={ResetPassword} />
    </Switch>
  );
};

export default Routes;
