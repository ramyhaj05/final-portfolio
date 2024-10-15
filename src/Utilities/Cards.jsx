import React from 'react'

function Cards({project, setShowProject, showProject}) {
  return (
        <div className="bg-pink-500 rounded-2xl" onClick={(e)=>{setShowProject({...showProject, show:true, id: project.id})}}>
            <div className="bg-base-300 rounded-xl hover:-rotate-3 h-full transition duration-500 z-30 hover:-mt-2 grid">
                <div className="p-2 font-black tracking-widest">{project.name}</div>
                <img src={project.image} className='pt-5 px-5 object-cover cursor-pointer'></img>
            </div>
        </div>
  )
}

export default Cards