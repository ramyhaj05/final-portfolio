import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import FloatingBackground from "../Utilities/FloatingBackground";
import FloatingCodes from "../Utilities/FloatingCodes";

const HorizontalScrollCarousel = ({adv}) => {
  const targetRef = useRef(null);
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[120vh] md:h-[200vh]">
      <FloatingCodes></FloatingCodes>
      <div className="sticky top-52 md:top-0 flex h-[70vh] md:h-[100vh] w-full md:w-full items-center overflow-hidden">
        <motion.div style={{ x }} className="grid md:grid-cols-3 gap-2 md:items-center">
            <Card card={adv} ref={ref} />
            <motion.div 
                initial={{opacity:0, x:200, scale:.5}}
                whileInView={{y:0, x:0, opacity:1, scale:1, transition:{duration:.5, delay:.7}}}
                viewport={{once: false}}
                ref={ref}
                className="md:col-span-2 lg:pl-44 md:pl-32 sm:text-xl md:text-2xl xl:text-7xl font-bold tracking-widest md:text-left text-center grid justify-center items-center md:px-5">{adv.name}</motion.div>
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <motion.div
      initial={{opacity:0, y:-300, scale:1}}
      whileInView={{y:0, x:0, opacity:1, scale:1.5, transition:{duration:1, delay:0}}}
      viewport={{once: false}}
     className="md:pl-24 md:border-r-4 border-base-content overflow-hidden grid px-2">
        <img src={card.image} alt={card.name} className=" p-2 w-full md:w-[25vw] object-cover border-t-lg scale-50 md:scale-100 object-left"></img>
    </motion.div>
  );
};

export default HorizontalScrollCarousel;
