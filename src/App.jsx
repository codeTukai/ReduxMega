import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { logIn, logout } from './store/authSlice'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(logIn({ userData }))
        } else {
          console.log(userData);
          
          dispatch(logout())
          console.log(userData);
          
        }
      })
      .finally(() => setLoading(false))
  }, [dispatch])

  if (loading) return null

  return (
    <div className='min-h-screen flex flex-col bg-gray-900 text-white'>
      
      <Header />

      {/* MAIN CONTENT */}
      <main className='flex-2'>
       TODO:  <Outlet /> {/* removed TODO */}
      </main>

      <Footer />

    </div>
  )
}

export default App