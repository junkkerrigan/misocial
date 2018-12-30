import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'

import Routes from './Routes';

import rootReducer from './redux/reducers';

import './styles/general.scss';

const store = createStore(rootReducer);

library.add(fab, fas, far);

const App = () => (
    <Provider store={store}>
      <Routes />
    </Provider>
);

export default App;