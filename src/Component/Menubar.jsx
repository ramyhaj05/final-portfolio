import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CodeBracketIcon, EnvelopeIcon, HomeIcon } from '@heroicons/react/16/solid'
import { Link } from 'react-router-dom'
function Menubar({currentPage, setCurrentPage}) {
    const menuItems =[
        {name:'home', link: '/'},
        {name:'projects', link: '/projects'},
        {name:'contact', link: '/contact'},
    ]
  return (
    <div className="sticky top-0  col-span-12 bg-base-100 z-10 shadow-xl border-b-2 border-base-300/70">
        <div 
            className="w-full bg-base-300 p-2 grid grid-cols-12 py-5">
                <div className="col-span-2 text-2xl font-black px-5">JPA</div>
                <div className="col-span-8 flex justify-center gap-3">
                    {
                        menuItems.map((item,i)=>{
                            return(
                                <Link to={item.link} key={i} className={`${currentPage === item.name && 'text-base-300 bg-base-content' } md:flex hidden transition duration-300 hover:scale-110 font-black capitalize rounded pt-1 px-3 cursor-pointer`} onClick={()=>{setCurrentPage(item.name)}}>{item.name}</Link>
                            )
                        })
                    }
                    
                    <Link to={'/'} className={`${currentPage === 'home' && 'text-base-300 bg-base-content' } flex md:hidden p-1 transition duration-300 hover:scale-110 rounded cursor-pointer`} onClick={()=>{setCurrentPage('home')}}><HomeIcon className='w-6'></HomeIcon></Link>
                    <Link to={'/projects'} className={`${currentPage === 'project' && 'text-base-300 bg-base-content' } flex md:hidden p-1 transition duration-300 hover:scale-110 rounded cursor-pointer`} onClick={()=>{setCurrentPage('project')}}><CodeBracketIcon className='w-6'></CodeBracketIcon></Link>
                    <Link to={'/contact'} className={`${currentPage === 'contact' && 'text-base-300 bg-base-content' } flex md:hidden p-1 transition duration-300 hover:scale-110 rounded cursor-pointer`} onClick={()=>{setCurrentPage('contact')}}><EnvelopeIcon className='w-6'></EnvelopeIcon></Link>
                </div>
        </div>
    </div>
  )
}

export default Menubar