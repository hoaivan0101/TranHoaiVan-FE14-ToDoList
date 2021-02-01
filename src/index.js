import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './Router.jsx';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store';



ReactDOM.render(
  <Provider store={store}>
      <React.StrictMode>
        <Router />
      </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

  // ReactDOM.render(<TimerView todo={myTodo} />, document.getElementById('root1'))

reportWebVitals();