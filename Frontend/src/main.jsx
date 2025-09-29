import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import './style.css'
import App from './App.jsx'
import Login from './Pages/Login/Login.jsx'
import Home from './Pages/Home/Home.jsx'
import SymptomForm from './Pages/SymptomChecker/SymptomForm.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"/",
        element:<Home/>
      },
    ]
  },
  {
    path: "/login",
    element: <App/>,
    children:[
      {
        path:"/login",
        element:<Login/>
      },
    ]
  },
  {
    path:"/symptomsForm",
    element:<App/>,
    children:[
      {
        path:"/symptomsForm",
        element: <SymptomForm/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,  
)
