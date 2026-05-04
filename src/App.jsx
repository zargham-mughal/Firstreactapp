import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Routes, Route, Link } from "react-router-dom"
import Home from './assets/componenets/Home'
import UsersPage from './assets/componenets/UsersPage'
import Usersdetail from './assets/componenets/Usersdetail'
import ErrorPage from './assets/componenets/ErrorPage'
import './App.css'

function App() {


  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
        <Link to="/users/:id">Usersdetail</Link>
      </nav>
      <div className="page-container">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<UsersPage />} />
          <Route path='/users/:id' element={<Usersdetail />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
