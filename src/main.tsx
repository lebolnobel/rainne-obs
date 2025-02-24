import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RainneApp from './app/RainneApp';
import ErrorPage from './app/components/ErrorPage';
import Home from './app/components/Home';
import Obs from './app/components/Obs';
import Species from './app/components/Species';
import Learn from './app/components/Learn';
import Settings from './app/components/Settings';
import About from './app/components/About';

import './styles/styles.css';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RainneApp />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/obs',
          element: <Obs />,
        },
        {
          path: '/species/:species',
          element: <Species />,
        },
        {
          path: 'learn',
          element: <Learn />,
        },
        {
          path: 'settings',
          element: <Settings />,
        },
        {
          path: 'about',
          element: <About />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_fetcherPersist: true,
    },
  },
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  </React.StrictMode>,
);
