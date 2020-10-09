import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './redux/store';
import Home from './views/Home';
import Favorites from './views/Favorites';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route component={Home} path="/" exact />
        <Route component={Favorites} path="/favorites" exact />
      </Router>
    </Provider>
  );
}

export default App;
