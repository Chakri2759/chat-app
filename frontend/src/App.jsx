import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from "../src/components/Navbar"
import ProfilePage from "../src/components/ProfilePage"
import SettingsPage from "../src/components/SettingsPage"
import LoginPage from "../src/components/LoginPage"
import SignUpPage from "../src/components/SignUpPage"
import HomePage from "../src/components/HomePage"
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
         <Route path="/" element={<HomePage/>}/>
         <Route path="/signup" element={<SignUpPage/>}/>
         <Route path="/login" element={<LoginPage/>}/>
         <Route path="/settings" element={<SettingsPage/>}/>
         <Route path="/profile" element={<ProfilePage/>}/>
        
      </Routes>
    </div>
  )
}

export default App