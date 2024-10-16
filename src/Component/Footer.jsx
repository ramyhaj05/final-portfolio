import React from 'react'

function Footer() {
  return (
    <div className='bg-base-200 p-5 grid md:grid-cols-3 gap-5'>
        <div className="font-black tracking-wide text-2xl flex flex-wrap">
            <div className="text-5xl text-center">JPA</div>
            <div className="left w-full -p-10">Jaymar Almodovar</div>
        </div>
        <div className="grid md:col-span-2 grid-cols-2">
            <div className="">
                <div className="">facebook</div>
                <div className="">facebook</div>
                <div className="">facebook</div>
                <div className="">facebook</div>
                <div className="">facebook</div>
                <div className="">facebook</div>
            </div>
            <div className="flex">
                <div className="">Home</div>
                <div className="">Projects</div>
                <div className="">Contact</div>
            </div>
        </div>
    </div>
  )
}

export default Footer