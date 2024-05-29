import React from 'react'
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom'
import Register from './pages/Register'
import ProtectedRoute from './components/ProtectedRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'


function logout(){
  localStorage.clear()
  return <Navigate to="/login"/>
}

function RegisterAndLogout(){
  localStorage.clear()
  return <Register/>
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route 
                path='/' 
                element={
                <ProtectedRoute>
                    <Home/>
                </ProtectedRoute>
                }
          />

          <Route 
                path='/login' 
                element={<Login/>}
          />
          <Route 
                path='/register' 
                element={<RegisterAndLogout/>}
          />
          <Route 
                path='*' 
                element={<NotFound/>}
          />
      </Routes>
    </BrowserRouter>
  )
}
