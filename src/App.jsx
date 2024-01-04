import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/Sign-Up" element={<SignUp />}/>
      <Route path="/Profile" element={<Profile />}/>
      <Route path="/about" element={<About />}/>
      
    </Routes>
    
    </BrowserRouter>
  )
}
