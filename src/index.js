import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { Router, Route, hashHistory} from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

//import { createBrowserHistory } from "history";

import reducer from './reducers'

import App from './App';
import Track from './Track';
import './index.css';


// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const store = createStore(reducer,composeWithDevTools(applyMiddleware(thunk)));
const history = syncHistoryWithStore(hashHistory,store);
//const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />      
      <Route path="/tracks/:id" component={Track} />      
    </Router>
  </Provider>,
  document.getElementById('root')
);
