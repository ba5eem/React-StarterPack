/*REACT*/
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
/*REDUX*/
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
/*CSS*/
import './index.css';
/*CONTAINERS*/
import App from './containers/App';
import Album from './containers/Album';
import User from './containers/User';
import Photo from './containers/Photo';
import Interest from './containers/Interest';
import Friend from './containers/Friend';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';



const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk)
  );





ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>

        <Route exact path="/" component={App}/>
        <Route exact path="/albums" component={Album}/>
        <Route exact path="/friends" component={Friend}/>
        <Route exact path="/interests" component={Interest}/>
        <Route exact path="/photos" component={Photo}/>
        <Route exact path="/users" component={User}/>

      </div>
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
