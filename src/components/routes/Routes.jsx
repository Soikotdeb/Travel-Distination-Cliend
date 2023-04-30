import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from '../home/Home';
import HomePage from '../HomePage/HomePage';
import News from '../news/News';
import Destination from '../destination/Destination';
import Blog from '../blog/Blog';
import Contact from '../contact/Contact';
import Error424 from '../error424/Error424';
import LoginForm from '../loginForm/LoginForm';
import SignUpForm from '../signUpForm/SignUpForm';


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
       {
        path:'/',
        element:<HomePage></HomePage>
       },{
        path:'news',
        element:<News></News>
       },
       {
        path:'destination',
      element:<Destination></Destination>
      },
      {
        path:'blog',
        element:<Blog></Blog>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
    path:'login',
    element:<LoginForm></LoginForm>
      },
      {
    path:'signup',
    element:<SignUpForm></SignUpForm>
      },
      {
        path:'*',
        element:<Error424></Error424>
      }
      
      ]
    },
  ]);



export default router;