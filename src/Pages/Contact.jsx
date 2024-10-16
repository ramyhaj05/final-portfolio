import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com';
import FloatingBackground from '../Utilities/FloatingBackground';
import ParallaxText from '../Utilities/ParallaxText';

function Contact() {
    const formRef = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_xmp200p', 'template_ejyheqn', formRef.current, '2yzEnnD_z9IqCQBUX')
        .then((result) => {
          alert('Message sent, thank you!');
          console.log(result.text);
        }, (error) => {
          alert('Error sending message, please try again.');
          console.log(error.text);
        });
  
      // Reset form
      e.target.reset();
    };
  return (
    <>
        <motion.div 
            initial={{opacity:0}}
            whileInView={{y:0, x:0, opacity:1, transition:{duration:.5, delay:.2}}}
            viewport={{once:false}}
            className="grid gap-5 md:col-span-10 md:grid-cols-3">
                <div className="col-span-3 relative -mt-5  bg-base-300 overflow-hidden">
                    <img src="/images/Contact/contact-hero.jpg" alt="contact" className='object-cover object-center w-full h-full md:col-span-2 h-52 opacity-20 absolute md:col-span-2 z-0'/>
                    <div className="z-10 absolute w-full bg-opacity-70"></div>
                    <div className="relative text-2xl md:text-3xl font-bold text-center">
                        <div className=" text-primary p-5 pt-10">CONTACT ME</div>
                        
                        <div className="w-full tracking-widest grid gap-5 bg-opacity-70 mt-10 backdrop-blur-xs z-20">
                            <div className="grid gap-1 justify-center bg-base-200/70 p-5">
                                <div className="text-center text-sm md:text-lg px-5 font-bold text-primary">Ready to bring your vision to life?</div>
                                <div className="text-center text-2xl md:text-5xl md:px-5 font-black">Let’s develop your dream website together. </div>
                                <div className="text-center text-sm md:text-lg px-5 font-bold text-primary">Get in touch today and let's start building your website!</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center col-span-3">
                    <div className="w-full md:w-3/4 bg-red-500">

                    </div>
                </div>
                <form ref={formRef} onSubmit={sendEmail} className='flex items-center col-span-3 justify-center'>
                    <div className="grid gap-2 w-full md:w-3/4 p-5 md:px-10 bg-base-300 rounded-md md:grid-cols-2 relative gap-x-10">
                        <img src="/images/Contact/contact.jpg" alt="contact" className='object-cover object-bottom w-full md:col-span-2 h-52 opacity-50 absolute md:col-span-2'/>
                        <div className="h-52 w-fulll md:col-span-2">
                        </div>
                        <div className="grid gap-1 items-start">
                            <span className='font-black tracking-widest -ml-3 text-sm opacity-90'>Name</span>
                            <input type="text" name="user_name" placeholder="Your Name" required className='p-2 rounded bg-white text-base-200 ring ring-base-300' />
                        </div>
                        <div className="grid gap-1 items-start">
                            <span className='font-black tracking-widest -ml-3 text-sm opacity-90'>Email</span>
                            <input type="email" name="user_email" placeholder="Your Email" required  className='p-2 rounded bg-white text-base-200 ring ring-base-300'/>
                        </div>
                        <div className="grid gap-1 items-start">
                            <span className='font-black tracking-widest -ml-3 text-sm opacity-90'>Contact #</span>
                            <input type="number" name="contact_number" placeholder="09XXXXXXXXX" required  className='p-2 rounded bg-white text-base-200 ring ring-base-300'/>
                        </div>
                        <div className="grid gap-1 items-start">
                            <span className='font-black tracking-widest -ml-3 text-sm opacity-90'>Message</span>
                            <textarea name="message" placeholder="Your Message" required className='p-2 rounded bg-white text-base-200 ring ring-base-300 min-h-20'></textarea>
                        </div>
                        <div className="flex justify-end md:col-span-2 pt-10"><button type="submit" className='btn btn-content-base w-fit tracking-widest'>Submit</button></div>
                    </div>
                </form>
        </motion.div>
    </>
  )
}

export default Contact