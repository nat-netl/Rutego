import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = {
  _renderers: {},
  supportsFiber: true,
  inject: () => ({}),
  onCommitFiberRoot: () => ({}),
  onCommitFiberUnmount: () => ({}),
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
