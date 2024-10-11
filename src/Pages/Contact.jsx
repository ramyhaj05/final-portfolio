import React from 'react'
import { motion } from 'framer-motion'

function Contact() {
  return (
    <>
        <motion.div 
            initial={{opacity:0}}
            whileInView={{y:0, x:0, opacity:1, transition:{duration:.5, delay:.2}}}
            viewport={{once:false}}
            className="grid gap-10 md:col-start-2 md:col-span-10">
            <div className="h-full p-2 bg-red-500">
                Contact
            </div>
        </motion.div>
    </>
  )
}

export default Contact