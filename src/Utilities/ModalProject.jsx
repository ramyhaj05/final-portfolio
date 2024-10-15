import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CursorArrowRaysIcon } from "@heroicons/react/16/solid";

const ModalProject = ({setData, data, project}) => {
  return (
    
    <AnimatePresence>
      {data.show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setData({...data, show:false})}
          className="bg-slate-900/20 backdrop-blur p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-tl from-secondary to-primary text-white p-6 rounded-lg w-full max-w-4xl shadow-xl cursor-default relative overflow-hidden border-2 border-white"
          >
            
            <img src={project.image} className="text-white/10 rotate-12 text-[250px] absolute z-0 -top-24 -left-24 opacity-50" ></img>
            <div className="relative z-10">
              <div className="bg-white/90 w-1/2 h-auto mb-2 rounded-full text-3xl text-indigo-600 grid place-items-center mx-auto shadow-md shadow-pink-500 border-4 border-base-300/90">
                <img src={project.image} className="object-cover"></img>
              </div>
              <h3 className="text-3xl font-bold text-center mb-2">
                {project.name}
              </h3>
              <p className="text-center mb-6 p-5 bg-base-300/50 rounded-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                aperiam vitae, sapiente ducimus eveniet in velit.
              </p>
              <div className="grid grid-cols-2 gap-2 tracking-widest">
                <button
                  onClick={() => setData({...data, show:false})}
                  className="bg-base-300 hover:bg-base-300/50 transition-colors text-white font-semibold w-full py-2 rounded border-2 border-transparent transition duration-300 hover:border-primary"
                >
                  Close
                </button>
                <a href={'https://www.facebook.com'} target="_blank">
                    <button className="bg-secondary hover:opacity-90 transition-opacity text-primary font-semibold w-full py-2 rounded border-2 border-transparent transition duration-300 hover:border-primary">Visit Live!</button>
                </a>
              </div>
            </div>
            <div className="text-primary/50 text-center tracking-widest font-bold pt-5 text-xs uppercase">click outside to close</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};


export default ModalProject;