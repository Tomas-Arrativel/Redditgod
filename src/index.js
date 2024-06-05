import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import { Provider } from 'react-redux';
import store from './app/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Posts from './features/posts/Posts';
import ErrorPage from './components/ErrorPage/ErrorPage';
import SearchResults from './features/posts/SearchResults';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Posts />,
      },
      {
        path: '/search',
        element: <SearchResults />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
