import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Bookings from './pages/Bookings'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{
      path: '/',
      element: <Home />
    },
    {
      path: '/my-bookings',
      element: <Bookings />
    }
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


