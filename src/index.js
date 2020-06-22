import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {Provider} from 'mobx-react';
import GoalStore from './stores/GoalStore'

const Root = (
  <Provider GoalStore={GoalStore}>
    <App/>
  </Provider>
)
ReactDOM.render(Root, document.getElementById('root'));