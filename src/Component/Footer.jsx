import React from 'react'
import { Link } from 'react-router-dom'

function Footer({setCurrentPage, currentPage}) {
    const contactIcon =[
        {name: 'facebook', delay: 1.9, image: '/images/Home/facebook.svg'},
        {name: 'upwork', delay: 1.8, image: '/images/Home/upwork.svg'},
        {name: 'email', delay: 1.7, image: '/images/Home/email.svg'},
        {name: 'whatsapp', delay: 1.6, image: '/images/Home/whatsapp.svg'},
        // {name: 'telegram', delay: 1.5, image: '/images/Home/telegram.svg'},
    ]
    const menuItems =[
        {name:'home', link: '/'},
        {name:'projects', link: '/projects'},
        {name:'contact', link: '/contact'},
    ]
  return (
    <>
        {/* <div className="col-span-12 p-1 bg-base-content mt-20 text-base-300 tracking-widest">
            
        </div> */}
        <div className='bg-base-200 grid md:grid-cols-3 gap-5  col-span-12 p-10 md:px-20'>
            <div className="font-black tracking-wide text-2xl grid">
                <div className="w-1/2"><img src={'/images/jpa-logo.svg'}></img></div>
                <div className="w-1/2 text-center text-sm md:text-[1.5rem]">Jaymar P Almodovar</div>
            </div>
            <div className="grid md:col-span-2 grid-cols-2">
                <div className="grid gap-2">
                    {
                        contactIcon.map((item, i)=>{
                            return(
                                <div className="flex gap-3 items-center">
                                    <img src={item.image} className='w-9 p-1 rounded-full bg-white'></img>
                                    <a href={'#'} className='capitalize'>{item.name}</a>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="flex flex-wrap flex-col gap-3">
                    {
                        menuItems.map((item,i)=>{
                            return(
                                <Link to={item.link} className='w-fit capitalize' onClick={()=>{setCurrentPage(item.name)}}>{item.name} Page</Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer