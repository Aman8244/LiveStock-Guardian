import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Authentication from './pages/Authentication';
import Prediction from './pages/Prediction';
import Pneumonia from './pages/diseases/pneumonia'
import Anthrax from './pages/diseases/anthrax';
import Lumpyvirus from './pages/diseases/lumpyvirus';
import Blackleg from './pages/diseases/blackleg';
import Footandmouth from './pages/diseases/footandmouth';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/auth",
    element: <Authentication />
  },
  {
    path: "/predict",
    element: <Prediction />
  },
  
      {
        path:"/disease/pneumonia",
        element:<Pneumonia/>
      },
      {
        path:"/disease/blackleg",
        element:<Blackleg/>
      },
      {
        path:"/disease/footandmouth",
        element:<Footandmouth/>
      },
      {
        path:"/disease/anthrax",
        element:<Anthrax/>
      },
      {
        path:"/disease/lumpyvirus",
        element:<Lumpyvirus/>
      }
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
