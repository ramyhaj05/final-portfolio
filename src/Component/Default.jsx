import React from 'react'
import Menubar from './Menubar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

function Default() {
  return (
    <div className="grid md:grid-cols-12">
        <div className="col-span-12 sticky top-0 flex justify-center z-20 relative bg-base-100">
          <div className="w-11/12 md:w-10/12">
            <Menubar></Menubar>
          </div>
        </div>
        <div className="col-span-12 flex justify-center z-0">
          <div className="w-11/12 md:w-10/12 p-2 md:p-5 relative overflow-hidden">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="col-span-12 sticky top-0 flex justify-center z-20 relative bg-base-100">
          <div className="w-11/12 md:w-10/12">
            <Footer/>
          </div>
        </div>

    </div>
  )
}

export default Default