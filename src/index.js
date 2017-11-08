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
import Album from './containers/Album';
import App from './containers/App';
import Friend from './containers/Friend';
import Interest from './containers/Interest';
import Photo from './containers/Photo';
import User from './containers/User';
import Register from './containers/Register';
import Login from './containers/Login';
import Logout from './containers/Logout';
import {
  BrowserRouter as Router,
  Route,
  Link
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
      <Link to="/">Home</Link>
      <br></br>
      <Link to="/albums">Albums</Link>
      <br></br>
      <Link to="/friends">Friends</Link>
      <br></br>
      <Link to="/interest">Interests</Link>
      <br></br>
      <Link to="/photos">Photos</Link>
      <br></br>
      <Link to="/users">Users</Link>
      <br></br>
      <Link to="/register">Register</Link>
      <br></br>
      <Link to="/login">Login</Link>
      <br></br>
      <Link to="/logout">Logout</Link>

      <Route exact path="/" component={App} />
      <Route path="/albums" component={Album} />
      <Route path="/friends" component={Friend} />
      <Route path="/interest" component={Interest} />
      <Route path="/photos" component={Photo} />
      <Route path="/users" component={User} />
      <Route path="/register" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/logout" component={Logout} />

    </div>
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
