import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FloatingBackground from '../Utilities/FloatingBackground'
import TypingEffect from '../Utilities/TypingEffect'
import HorizontalScrollCarousel from '../Component/HorizontalCarousel'
import Cards from '../Utilities/Cards'
import ModalProject from '../Utilities/ModalProject'
import { Link } from 'react-router-dom'
function Home() {

    const contactIcon =[
        {name: 'facebook', delay: 1.9, image: '/images/Home/facebook.svg'},
        {name: 'upwork', delay: 1.8, image: '/images/Home/upwork.svg'},
        {name: 'email', delay: 1.7, image: '/images/Home/email.svg'},
        {name: 'whatsapp', delay: 1.6, image: '/images/Home/whatsapp.svg'},
        // {name: 'telegram', delay: 1.5, image: '/images/Home/telegram.svg'},
    ]

    const skills =[
        {name:'PHP', image: '/images/Home/skills/php.svg', delay:.4},
        {name:'Laravel', image: '/images/Home/skills/laravel.svg', delay:.5},
        {name:'ReactJS', image: '/images/Home/skills/react.svg', delay:.6},
        {name:'TailwindCSS', image: '/images/Home/skills/tailwind.svg', delay:.7},
        {name:'DaisyUI', image: '/images/Home/skills/daisyui.svg', delay:.8},
        {name:'HeadlessUI', image: '/images/Home/skills/headlessui.svg', delay:.9},
        {name:'Github', image: '/images/Home/skills/github.svg', delay:1},
        {name:'HTML', image: '/images/Home/skills/html.svg', delay:1},
        {name:'CSS', image: '/images/Home/skills/css.svg', delay:1},
        {name:'JavaScript', image: '/images/Home/skills/javascript.svg', delay:1},
    ]
    const adv =[
        {id:1, name:'Building Fast, Responsive Websites for the Modern Web', image: '/images/Home/ads/responsive-fast.png', delay:.4},
        {id:2, name:'Turning Ideas into Impactful Digital Experiences', image: '/images/Home/ads/ideas-solution.png', delay:.4},
        {id:3, name:'Expert Web Development That Elevates Your Brand', image: '/images/Home/ads/brand.png', delay:.4},
        {id:4, name:'Crafting Cutting-Edge Websites That Drive Results', image: '/images/Home/ads/making-website.png', delay:.4},
        {id:5, name:'Transforming Visions into Seamless Online Solutions', image: '/images/Home/ads/vision.png', delay:.4},
    ]

    const projectList = [
        {id:1, name:'Project Name 1', image:'/images/Home/ads/responsive-fast.png', delay:.4, link:'#'},
        {id:2, name:'Project Name 2', image:'/images/Home/ads/responsive-fast.png', delay:.4, link:'#'},
        {id:3, name:'Project Name 3', image:'/images/Home/ads/responsive-fast.png', delay:.4, link:'#'},
        {id:4, name:'Project Name 4', image:'/images/Home/ads/responsive-fast.png', delay:.4, link:'#'},
        {id:5, name:'Project Name 5', image:'/images/Home/ads/responsive-fast.png', delay:.4, link:'#'},
    ]
    let newDate = new Date()
    let currentYear = newDate.getFullYear();
    const ref = useRef(null);
    const [showProject, setShowProject] = useState({
        show:false,
        id:0,
    })
    const [currentData, setCurrentData] = useState({})
    // useEffect(()=>{
    //     window.scrollTo(0, 0);
    // },[])
  return (
    <>
        <div className="md:grid gap-10 md:col-start-2 md:col-span-10">
            
            <ModalProject setData={setShowProject} data={showProject} project={projectList[showProject.id -1]}></ModalProject>
            <div className="h-[80vh] flex flex-wrap justify-center items-center z-0">
                <FloatingBackground />
                <div className="flex flex-cols-1 flex-wrap justify-center z-10">
                    <div className="grid md:grid-cols-3 justify-center items-center gap-10 relative">
                        <div className="grid justify-center">

                            <motion.img 
                                initial={{opacity:0}}
                                whileInView={{y:0, x:0, opacity:1, transition:{duration:.5, delay:1}}}
                                viewport={{once:true}}
                                src='/images/Home/profile.png' className='object-cover grayscale w-52 md:w-72 h-52 md:h-72 rounded-full p-2 border-2'></motion.img>
                        </div>
                        <div className="w-full pt-5 grid tracking-widest md:col-span-2 px-5 md:px-32">
                            <motion.div 
                                initial={{opacity:1, y:-150, scale:2.5}}
                                whileInView={{y:0, x:0, opacity:1, scale:1, transition:{duration:1.2, delay:0}}}
                                viewport={{once:true}}
                                className="text-primary/70 pl-5 font-mono p-1 px-2 ml-5 md:ml-10 w-fit rounded text-lg">Hi, my name is</motion.div>
                            <motion.div 
                                initial={{opacity:0, y:-200}}
                                whileInView={{y:0, x:0, opacity:1, transition:{duration:.5, delay:1.2}}}
                                viewport={{once:true}}
                                className="sm:text-7xl text-7xl lg:text-9xl font-bold -mt-8 font-sans">Jaymar</motion.div>
                            <motion.div 
                                initial={{opacity:0, x:200}}
                                whileInView={{y:0, x:0, opacity:1, transition:{duration:.2, delay:1.5}}}
                                viewport={{once:true}}
                                className="tracking-wide pt-2 md:pt-5 text-2xl md:text-3xl text-base-content/90"><TypingEffect></TypingEffect></motion.div>
                            <div className="tracking-wide text-sm md:text-2xl text-base-content/90 relative overflow-hidden pt-1">
                                <motion.div 
                                    initial={{opacity:1, x:0, scale:1.1}}
                                    whileInView={{y:0, x:700, opacity:1, scale:1.1, transition:{duration:1.5, delay:1.5}}}
                                    viewport={{once:true}}
                                    className="absolute bg-base-100 text-base-100 z-20 p-2">Turning Ideas into Impactful Digital Experiences</motion.div>
                                <div className="z-10 p-1 px-2 text-primary bg-base-content rounded tracking-wide">Turning Ideas into Impactful Digital Experiences</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center gap-5 md:gap-10 flex-wrap overflow-hidden pt-20 p-2">
                        {
                            contactIcon.map((item, i)=>{
                                return(
                                    <motion.div key={i}
                                        initial={{opacity:0, y:50}}
                                        whileInView={{y:0, x:0, opacity:1, transition:{duration:.5, delay:item.delay}}}
                                        viewport={{once: false}}
                                        className="text-base-300 rounded-md grid justify-center items-center gap-1">
                                            <img className='place-self-center w-16 p-2 bg-base-content rounded-full object-cover border-4 ring-2 ring-primary border-black' src={item.image} alt={item.name}></img>
                                        </motion.div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="p-2 ">
                <div className="mt-52 md:mt-32 bg-base-300 rounded-t-xl border-8 border-base-100 ring ring-base-content shadow-2xl shadow-base-content">
                    <div className="bg-base-200 rounded-t-md overflow-hidden">
                            <motion.div ref={ref} className='w-full text-xl md:text-3xl p-5 px-10'
                                initial={{opacity:0, y:50}}
                                whileInView={{y:0, x:0, opacity:1, transition:{duration:.5, delay:1.5}}}
                                viewport={{once: true}}>Building Stunning Websites Tailored to Your Needs.</motion.div>
                    </div>
                    <motion.div 
                        initial={{opacity:0, x:200, scale:.5}}
                        whileInView={{y:0, x:0, opacity:1, scale:1, transition:{duration:.5, delay:1.5}}}
                        viewport={{once: true}}
                        className="bg-base-200 p-5 px-10 w-fit flex gap-3 rounded-b-xl">
                        <div className="text-7xl font-black">{currentYear-2016}</div>
                        <div className="grid items-center justify-center tracking-widest">
                            <div className="w-full pt-2 font-bold">Years of<br></br>Experience</div>
                        </div>
                    </motion.div>
                    {/* <RevealLinks></RevealLinks> */}
                    {/* <Example></Example> */}
                    <div className="flex flex-wrap  justify-center gap-5 md:gap-10 flex-wrap items-center p-5 px-7 mt-10">
                        {skills.map((item,i)=>{
                            return (
                                <div className="grid justify-center items-center md:gap-1 gap-2 md:gap-5 cursor-pointer hover:scale-110 w-18" key={i} title={item.name}>
                                    <div className="w-full flex justify-center"><img src={item.image} alt={item.name} className='w-16 md:w-20 object-cover p-2 bg-gradient-to-br from-primary via-base-300 to-base-200 border-2 rounded-md shadow-xl shadow-black'/></div>
                                    <div className="text-center font-bold  tracking-widest text-xs md:text-lg text-clip md:pt-2">{item.name}</div>
                                </div>
                            )
                        })}
                    </div>
                    {
                        adv.map((item, i)=>{
                            return(<HorizontalScrollCarousel adv={item} key={i}></HorizontalScrollCarousel>)
                        })
                    }
                    
                </div>
            </div>
            <div className="pt-16 md:pt-32">
                <div className="text-2xl font-black tracking-widest">Recent Projects</div>
                <div className="flex justify-center pt-10">
                    <div className="w-full md:w-10/12 grid grid-cols-2 gap-5">
                        <Cards project={projectList[0]} setShowProject={setShowProject} showProject={showProject}></Cards>
                        <div className="grid grid-cols-2 gap-5">
                            {projectList.map((item, i)=>{
                                if(item.id > 1){
                                    return (
                                        <Cards project={item} key={i} setShowProject={setShowProject} showProject={showProject}></Cards>
                                    )
                                }
                            })}
                        </div>
                        <div className="col-span-2 p-2 flex justify-end">
                            <Link to={'/projects'} className=" bg-base-300 tracking-widest font-bold p-2 px-3 rounded-md cursor-pointer transition duration-300 hover:scale-110 hover:text-primary">See more</Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="pt-16 md:pt-32">
                <div className="tracking-widest text-2xl font-black">About me</div>
            </div>
            <div className="grid md:grid-cols-3 gap-10 md:p-5 p-2 align-center justify-center">
                <img src='/images/Home/profile.png' className='w-full h-72 md:h-96 object-cover grayscale rounded-xl'></img>
                <div className="p-2 md:p-5 tracking-widest  place-self-center grid gap-5 md:gap-10 md:col-span-2">
                    <div className="flex">
                        <b className='font-black text-4xl md:text-5xl'><span className=''>I am</span> Jaymar,</b> 
                    </div>
                    <div className="text-justify">
                        a graduate of <b>B.S. in Information Technology</b> from STI Santa Rosa in 2016. I have worked as a computer programmer on a variety of projects, including <b>UMPI (formerly Nissan Philippines)</b> revising and upgrading their Payroll system and the <b>Business Permit and Licensing Office at the City Government of Santa Rosa</b>, where I also contributed as a website developer and develop their in-house system connecting many offices.
                    </div>
                    <div className="text-justify">
                    I specialize in creating sleek, responsive websites using technologies like HTML, CSS, JavaScript, ReactJS, PHP, TailwindCSS, Framer Motion and DaisyUI. My focus is on crafting intuitive, user-centered designs that are not only aesthetically pleasing but also optimized for performance. I am continuously exploring new trends and techniques to keep delivering innovative solutions.
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
  

export default Home