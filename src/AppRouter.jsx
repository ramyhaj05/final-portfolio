import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Default from './Component/Default'
import Contact from './Pages/Contact'
import Project from './Pages/Project'

function AppRouter() {
  return (
    <Routes>
        <Route path="/" element={<Default></Default>}> 
            <Route index element={<Home/>}></Route>
            <Route path="/project" element={<Project/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
        </Route>
    </Routes>
  )
}

export default AppRouter