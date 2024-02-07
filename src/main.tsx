import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import '../styles/global.scss';

import { BrowserRouter } from 'react-router-dom';
import { FavouriteContextProvider } from './context/FavouritesContext';

async function enableMocking() {
  const { worker } = await import('./__mocks__/browser');

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <FavouriteContextProvider>
        <BrowserRouter basename={'/staybae-ui/'}>
          <App />
        </BrowserRouter>
      </FavouriteContextProvider>
    </React.StrictMode>,
  );
});
