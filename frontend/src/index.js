import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import CaseStudy from './container/CaseStudy/CaseStudy';
import Page2 from './container/Page2/Page2';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:"case-study",
    element: <Page2/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
reportWebVitals();
