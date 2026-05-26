import { useEffect } from 'react'
import Auth from './pages/Auth.jsx'
import Home from './pages/Home.jsx'
import InterviewPage from './pages/InterviewPage.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUserData } from './store/userSlice.js'



export const serverUrl = "http://localhost:8000"
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/interview' element={<InterviewPage />} />
    </Route>
  )
)

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    const getUser = async () => {
      try {
        const result = await axios.get(serverUrl + '/api/v1/user/current-user', { withCredentials: true })
        dispatch(setUserData(result.data))
      } catch (error) {
        console.log(error)
        dispatch(setUserData(null))
      }
    }
    getUser()
  }, [dispatch])

  return <RouterProvider router={router} />
}

export default App