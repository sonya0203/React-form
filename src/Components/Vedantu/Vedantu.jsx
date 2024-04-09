import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout'
import Home from './Home'

function Vedantu() {
  const router = createBrowserRouter([
    {
    path: "/",
    element: <Layout/>,  
    children:[
      {
        path:"/",
        element:<Home/>
      }
          
        ]
    }])
  return (
 <>
 <RouterProvider router={router}/>
 
 </>
  )
}

export default Vedantu