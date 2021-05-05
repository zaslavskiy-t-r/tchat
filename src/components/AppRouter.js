import React, {useContext} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import {privateRoutes, publicRoutes} from "../routes";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/const";
import {useAuthState} from "react-firebase-hooks/auth";
import {Context} from "../index";

const AppRouter = () => {


  const {auth} = useContext(Context)
  const [user] = useAuthState(auth)

  return user ?
    (
      <Switch>
        {privateRoutes.map(({path, Component}) =>
          <Route path={path} component={Component} exact={true} key={path}/>
        )}
        <Redirect to={CHAT_ROUTE}/>
      </Switch>
    )
    :
    (
      <Switch>
        {publicRoutes.map(({path, Component}) =>
          <Route path={path} component={Component} exact={true} key={path}/>
        )}
        <Redirect to={LOGIN_ROUTE}/>

      </Switch>

    )


};

export default AppRouter;