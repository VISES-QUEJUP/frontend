  import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Register from './components/Register.jsx'
import Login from './components/Login';
import Publicacion from './components/Publicacion';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login/>,
    errorElement: <h1>Error, lugar no econtrado master :c</h1>
  },
  {
    path:'/register',
    element: <Register/>,
  },
  {
    path: '/',
    element: <Publicacion/>
  }
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
