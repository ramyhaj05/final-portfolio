import React from 'react';
import { motion } from 'framer-motion';

const floatingBg = [
    {title:'<div></div>', x:-150, y:50, initialX: 100, initialY:150},
    {title:'<span></span>', x:0, y:200, initialX: 0, initialY:-250},
    {title:'<a></a>', x:-50, y:-50, initialX: 0, initialY:150},
    {title:'<iframe></iframe>', x:200, y:250, initialX: 0, initialY:0},
    {title:'<image></image>', x:300, y:0, initialX: 100, initialY:-200},
    {title:'<form></form>', x:300, y:-300, initialX: 300, initialY:0},
    {title:'<table></table>', x:300, y:350, initialX: 300, initialY:-150},
    {title:'<javascript></javascript>', x:-300, y:50, initialX: -100, initialY:150},
    {title:'<h1></h1>', x:-250, y:-300, initialX: -300, initialY:50},
    {title:'<body></body>', x:-500, y:-200, initialX: -300, initialY:50},
    {title:'<html></html>', x:500, y:200, initialX: 50, initialY:300},
]
const FloatingObject = ({ children, x, y, duration, initialX, initialY }) => {
  return (
    <motion.div
      className="absolute"
      initial={{ x: initialX, y: initialY }}
      animate={{ x: x, y: y }}
      transition={{
        repeat: Infinity,
        repeatType: "mirror",
        duration: duration,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

const FloatingCodes = () => {
  return (
    <div className="absolute w-full h-full overflow-hidden z-0 grid justify-center items-center">
        <div className="">
            {floatingBg.map((item, i)=>{
                return(
                    <FloatingObject x={item.x} y={item.y} initialX={-item.initialX} initialY={-item.initialY} key={i} duration={6}>
                        <div className="text-xl font-black tracking-widest text-base-content/10">{item.title}</div>
                    </FloatingObject>
                )
            })}
            {floatingBg.map((item, i)=>{
                return(
                    <FloatingObject x={item.x} y={item.y} initialX={-item.initialX-100} initialY={-item.initialY} key={i} duration={6}>
                        <div className="text-xl font-black tracking-widest text-base-content/10">{item.title}</div>
                    </FloatingObject>
                )
            })}
            {/* You can add more floating objects here */}
        </div>
        <div className="">
            {floatingBg.map((item, i)=>{
                return(
                    <FloatingObject x={item.x} y={item.y} initialX={item.initialX} initialY={item.initialY} key={i} duration={6}>
                        <div className="text-xl font-black tracking-widest text-base-content/10">{item.title}</div>
                    </FloatingObject>
                )
            })}
        </div>
        <div className="">
            {floatingBg.map((item, i)=>{
                return(
                    <FloatingObject x={item.x} y={item.y} initialX={item.initialX-100} initialY={item.initialY} key={i} duration={6}>
                        <div className="text-xl font-black tracking-widest text-base-content/10">{item.title}</div>
                    </FloatingObject>
                )
            })}
        </div>
    </div>
  );
};

export default FloatingCodes;
