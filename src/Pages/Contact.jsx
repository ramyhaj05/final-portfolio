import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from 'emailjs-com';

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
            className="grid gap-10 md:col-start-2 md:col-span-10">
            <div className="h-full p-2 bg-red-500 relative">
                <form ref={formRef} onSubmit={sendEmail}>
                    <input type="text" name="user_name" placeholder="Your Name" required />
                    <input type="email" name="user_email" placeholder="Your Email" required />
                    <textarea name="message" placeholder="Your Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </motion.div>
    </>
  )
}

export default Contact