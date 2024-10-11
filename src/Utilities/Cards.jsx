import React from 'react'

function Cards() {
  return (
        <div className="bg-pink-500 rounded-2xl">
            <div className="bg-base-300 rounded-xl hover:-rotate-3 h-full transition duration-500 z-30 hover:-mt-2 grid">
                <div className="p-2 font-black tracking-widest">Project name</div>
                <img src={'/images/Home/ads/brand.png'} className='pt-5 px-5 object-cover cursor-pointer'></img>
            </div>
        </div>
  )
}

export default Cards