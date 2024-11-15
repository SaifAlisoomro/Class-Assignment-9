import React from 'react'
import { FaGithub,FaLinkedin,FaLaptop } from 'react-icons/fa6'

const Social = () => {
  return (
   <div className='flex justify-between m-10 items-center py-5 shadow-lg shadow-slate-700 ' >
    <div className='text-2xl text-[#1d6ba2] font-bold font-sans items-center ml-3'>
        <h3 className='text-[#2eb9db]'>Lets met me i am </h3>
        <h3 className='text-4xl'>SAIF SOOMRO</h3>
        <h3 className='flex gap-x-2 items-center text-[#2eb9db]'>Front-End Developer  < FaLaptop /> </h3>
       
    </div>
    <div className='bg-slate-100 rounded-md' >
        <button className='flex items-center gap-x-2'>
            <span>Follow me on </span>
            <span className='text-[#044e83] font-sans font-bold'>Github</span>
            <FaGithub />
        </button>
    </div>
    <div className='bg-slate-100 rounded-md mr-3'>
        <button className='flex items-center gap-x-2'>
            <span>Follow me on </span>
            <span className='text-[#044e83] font-sans font-bold'>Linkedin</span>
            < FaLinkedin className='bg-[#044e83] text-white' />
        </button>
    </div>
   </div>
  )
}

export default Social
