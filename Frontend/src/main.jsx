import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Auth from './pages/Auth.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<App />} />
      <Route path='/auth' element={<Auth />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
