import React from 'react'

function CardProjects() {
  return (
    <div className="rounded p-5 grid  bg-red-500">
        <img src={'/images/Home/ads/brand.png'} className='w-full h-full object-cover p-2 rounded-t-md flex flex-wrap' ></img>
        <div className=" flex flex-wrap border-t-2 mt-2">
            <div className="font-black tracking-widest p-2 text-primary">Project name</div>
            <div className="px-5 pt-2 text-primary h-12 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis molestiae voluptatum ex nam quos, debitis illum rem quia, ratione illo pariatur, quidem consectetur corrupti obcaecati officia ut cum explicabo.</div>
            <div className="p-5 pt-4 flex justify-end">
                <div className="p-2 px-3 bg-primary/90 tracking-wide font-bold ">Learn more</div>
            </div>
        </div>
    </div>
  )
}

export default CardProjects