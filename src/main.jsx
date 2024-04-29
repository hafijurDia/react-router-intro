import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import First from './components/First/First.jsx';
import Friends from './components/Friends/Friends.jsx';
import FriendDetail from './components/FriendDetail/FriendDetail.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children: [
      {
        path:'/',
        element:<First></First>
      },
      {
        path:'friends',
        element:<Friends></Friends>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'friend/:friendId',
        element:<FriendDetail></FriendDetail>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)

        
      },
      {
        path:'about',
        element:<About></About>
      },
      {
        path:'contact',
        element:<Contact></Contact>
      },
      {
        path:'*',
        element:<div>4444444444440000044444444</div>
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
