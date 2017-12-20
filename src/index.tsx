/* eslint-disable */
import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './router';
import createStore from './store';

declare global {
  interface Window { __REDUX_DEVTOOLS_EXTENSION__: any; }
}

const store = createStore(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <AppContainer>
    <App store={store} />
  </AppContainer>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./router', () => {
    const NextApp = require('./router').default;
    render(
      <AppContainer>
        <NextApp store={store} />
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}

