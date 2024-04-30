import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './componants/Root/Root.jsx';
import Home from './componants/Home/Home.jsx';
import Login from './componants/login/Login.jsx';
import Register from './componants/register/Register.jsx';
import AllTouristSpot from './componants/allTouristSpot/AllTouristSpot.jsx';
import AddTourist from './componants/addTourist/AddTourist.jsx';
import MyList from './componants/myList/MyList.jsx';
import AuthProvider from './componants/Provider/AuthProvider.jsx';
import PrivateRoute from './componants/privateRoute/PrivateRoute.jsx';
import NotFoundPage from './componants/NotFound/NotFoundPage.jsx';
import Details from './componants/details/Details.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Update from './componants/Update/Update.jsx';
import Subcategory from './componants/subcategory/Subcategory.jsx';
import AboutUs from './componants/About/AboutUs.jsx';
import Contact from './componants/contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: '*',
    element: <NotFoundPage></NotFoundPage>
  },
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/spot')
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/touristSpot',
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch('http://localhost:5000/spot')
      },
      {
        path: '/addTourist',
        element: <PrivateRoute><AddTourist></AddTourist></PrivateRoute>
      },
      {
        path: '/myList',
        element: <PrivateRoute><MyList></MyList></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/spot')
      },
      {
        path: '/spot/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/spot')
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/spots/${params.id}`)
      },
      {
        path: '/subcategory/:countryName',
        element: <PrivateRoute><Subcategory></Subcategory></PrivateRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/country/${params.countryName}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
