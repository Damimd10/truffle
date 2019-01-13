import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

import Home from './screens/Home';

ReactDOM.render(
  <Router>
    <Route path="/" component={Home} />
  </Router>,
  document.getElementById('root'),
);

serviceWorker.unregister();
