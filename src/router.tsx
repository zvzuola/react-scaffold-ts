/* eslint-disable */
import * as React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from './layout/Index';
import './index.less';

export interface AppRouterProps { store: any; }

function AppRouter(props: AppRouterProps) {
  return (
    <Provider store={props.store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Layout} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default AppRouter;
