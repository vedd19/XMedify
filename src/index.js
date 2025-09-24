import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home';
import Bookings from './pages/Bookings/Bookings'
import SearchResults from './pages/SearchResults/SearchResults';
import { SnackbarProvider } from 'notistack';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{
      path: '/',
      element: <Home />
    },
    {
      path: '/search',
      element: <SearchResults />
    },
    {
      path: '/my-bookings',
      element: <Bookings />
    },

    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SnackbarProvider
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
  >
    <RouterProvider router={router} />
  </SnackbarProvider>
);


