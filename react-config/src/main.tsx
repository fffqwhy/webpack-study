
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';

import App from './app'
import store from './redux/store';
import '../i18n';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)