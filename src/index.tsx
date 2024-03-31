import ReactDOM, { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'store/Store';

import App from 'App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement as HTMLElement);

if (rootElement?.hasChildNodes()) {
  hydrateRoot(
    rootElement,
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );
} else {
  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
  );
}
