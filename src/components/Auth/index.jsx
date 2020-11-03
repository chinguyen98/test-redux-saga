import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import SignInPage from './SignInPage';

function Auth() {
  const match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route exact path={`${match.url}/sign-in`} component={SignInPage} />
      </Switch>
    </>
  )
}

export default Auth;