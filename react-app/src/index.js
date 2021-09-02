import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import './layout.css';
// import './components/Profile/ProfileLayout.css';
// import './components/Insight/InsightLayout.css';
// import './components/City/CityLayout.css';
import App from './App';
import configureStore from './store';
import { ModalProvider } from "./context/Modal";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <App />
      </ModalProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
