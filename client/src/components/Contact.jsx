import { useRef } from 'react';
import TrackingText from './styled_components/TrackingText';
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_imvwnbh', 'template_je9kgni', form.current, 'yYaTkV2LC8nxhsdxb' )
      .then(res => {
        console.log(res, "SUCCESS");
        e.target.reset();
      })
      .catch(err => console.log(err, "ERROR"))
  };

  return (
    <motion.div
      id="contact"
      initial={{ opacity: 0}}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col w-full sm:w-3/4 justify-center items-center text-center gap-10 h-screen relative">
      <TrackingText>Contact Me</TrackingText>
      <form onSubmit={sendEmail} ref={form} className='flex flex-col gap-2 w-3/4'>
        <div className='flex flex-col lg:flex-row gap-2 w-full'>
            <input type="text" placeholder="Name" name="name" className="bg-slate-800/50 px-6 py-2 border-b transition-all focus:text-gray-300 focus:border-gray-400/40 focus:border-b-4"/>
            <input type="email" placeholder="Email" name="email" className="bg-slate-800/50 px-6 py-2 border-b transition-all focus:text-gray-300 focus:border-gray-400/40 focus:border-b-4"/>
        </div>
        <input type="text" placeholder='Subject' name="subject" className="bg-slate-800/50 px-6 py-2 border-b transition-all focus:text-gray-300 focus:border-gray-400/40 focus:border-b-4"/>
        <textarea name="message" className="bg-slate-800/50 px-6 py-2 border-b transition-all focus:text-gray-300 focus:border-gray-400/40 focus:border-b-4" cols="30" rows="10" placeholder="Message..." ></textarea>
        <button className="border rounded bg-slate-900 px-6 py-2 hover:bg-slate-800 cursor-pointer text-white">SUBMIT</button>
      </form>
    </motion.div>
  )
}

export default Contact