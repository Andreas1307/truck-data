import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Homepage from './App.js'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Trucks from "./pages/trucks.js"
import TruckDetails from './components/TruckDetails.js';
import MoreTrucksPage from './pages/moreTrucksPage.js';
import TruckSpecs from './truckSpecifications.js';
import Contact from './pages/contact.js';
import About from './pages/about.js';
import CompareTrucks from './pages/compareTrucks.js';
import BlogDesc from './pages/blogDesc.js';
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/trucks",
      element: <Trucks />,
    },
    {
      path: "/trucks/:brand",
      element: <TruckDetails />,
    },
    {
      path: "/trucks/:brand/:name", 
      element: <MoreTrucksPage />,
    },
    {
      path: "/trucks/:brand/:name/:model", 
      element: <TruckSpecs />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/about", 
      element: <About />,
    },{
      path: "/trucks/compare",
      element: <CompareTrucks />
    } , {
      path: "/blog/:title",
      element: <BlogDesc />
    }
  ]
  ,
{
  basename: "/Truck-Data",
}
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
