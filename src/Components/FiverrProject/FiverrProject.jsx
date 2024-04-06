import React from 'react'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Home/Home'
import Gigs from './Gigs/Gigs'
import Gig from './Gig/Gig'
import Orders from './Orders/Orders'
import MyGigs from './MyGigs/MyGigs'
import Add from './Add/Add'
import Messages from './Messages/Messages'
import Message from './Message/Message'
import Layout from './Layout/Layout'

function FiverrProject() {

  const router = createBrowserRouter([
    {
    path: "/",
    element: <Layout/>,  
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path: "/gigs",
        element: <Gigs />
      },
      {
        path: "/gig/:id",
        element: <Gig/>
      },
      {
        path: "/orders",
        element: <Orders/>
      },
      {
        path: "/myGigs",
        element: <MyGigs/>
      },
      {
        path: "/add",
        element: <Add/>
      },
      {
        path: "/messages",
        element: <Messages/>
      },
      {
        path: "/message/:id",
        element: <Message/>
      }
    ]   
  }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default FiverrProject