import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { RecoverPassword } from '../pages/UserForms/RecoverPassword';
import { SignIn } from '../pages/UserForms/SignIn';
import { SignUp } from '../pages/UserForms/SignUp';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/entrar" exact component={SignIn} />
      <Route path="/registro" exact component={SignUp} />
      <Route path="/senha/recuperar" exact component={RecoverPassword} />
    </Switch>
  );
};

export default Routes;
