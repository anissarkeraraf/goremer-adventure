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
import TouristSpots from './componants/touristSpots/TouristSpots.jsx';

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
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/touristSpot',
        element: <AllTouristSpot></AllTouristSpot>
      },
      {
        path: '/addTourist',
        element: <PrivateRoute><AddTourist></AddTourist></PrivateRoute>
      },
      {
        path: '/myList',
        element: <PrivateRoute><MyList></MyList></PrivateRoute>
      },
      {
        path: '/touristSpots',
        element: <TouristSpots></TouristSpots>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
