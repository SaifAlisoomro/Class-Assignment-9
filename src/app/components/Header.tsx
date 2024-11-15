import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa6'


const Header = () => {
  return (
    <div className='flex justify-around  bg-blue-900 text-white font-sans font-semibold h-20 z-30 sticky top-0'>
     <div className='flex justify-center items-center gap-10'>
    < Image src={"/logo.9ff76f62.png"} alt='logo' width={90} height={90} className='mt-16'/>
    <h1 className='text-4xl text-[#37aecc]'>Tution free Education Program</h1>
     </div>
    <ul className='flex justify-around items-center gap-5'>
        <Link href={""}> <li>Home</li> </Link>
        <Link href={""}> <li>Apply</li> </Link>
        <Link href={""}> <li>Jobs</li> </Link>
        <Link href={""}> <li> Result</li> </Link>
        <Link href={""}> <li>Courses</li> </Link>
    </ul>
     < div className='flex justify-center items-center gap-x-2 text-2xl font-medium font-sans'>
          < FaGithub className='text-4xl' />
        <button className='text-sky-200'>Github</button>
        </div> 
    </div>
  )
}

export default Header
