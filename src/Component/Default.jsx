import React, { useState } from 'react'
import Menubar from './Menubar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Default() {
  const [currentPage, setCurrentPage] = useState('home')
  return (
    <div className="grid md:grid-cols-12">
            <Menubar currentPage={currentPage} setCurrentPage={setCurrentPage}></Menubar>
        <div className="col-span-12 flex justify-center z-0 min-h-screen">
          <div className="w-11/12 md:w-10/12 p-2 md:p-5 relative overflow-hidden">
            <Outlet></Outlet>
          </div>
        </div>
        <Footer currentPage={currentPage} setCurrentPage={setCurrentPage}/>

    </div>
  )
}

export default Default