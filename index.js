import React from 'react';
import { render } from 'react-dom';
import CounterContainer from './containers/Counter';

import { counterApp } from './reducers';
import { createStore } from 'redux';

import { Provider } from 'react-redux';

// creamos la store pasando el reducer que hemos creado (counterApp)
const store = createStore(counterApp);

render(
  // Envolvemos nuestro componente Counter con el componente Provider para poder acceder al estado desde cualquier punto de la app
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  document.getElementById('root')
);
