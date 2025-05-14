import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Components/Login/Login'
import StudentDashboard from './Components/StudentDashboard/StudentDashboard'
import AddStudent from './Components/AddStudent/AddStudent'
import { AuthProvider } from './Components/Context/AuthContext/AuthContext'
import { Navigate, RouterProvider, Routes, Route , BrowserRouter } from 'react-router-dom'
import { StudentProvider } from './Components/Context/StudentContext/StudentContext'
function App() {
  
 
  return (
  <>
    <StudentProvider>
      <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/home" element={<StudentDashboard/>}/>
              <Route path="/addstudent" element={ <AddStudent/>}/>
              <Route path="/" element={<Login/>}/>
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </StudentProvider>
</>


   
   
  )
}

export default App
