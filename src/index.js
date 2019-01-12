import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App = () => 'Hello';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
