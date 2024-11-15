import React from 'react'
import Image from 'next/image'


const Slide = () => {
  return (
    <div className='flex justify-around items-center'>
      <div className='grid grid-cols-2 m-8 gap-x-2 items-center shadow-lg shadow-black'>


        <div>
         <Image src={"/slideShow2.ce4d5430.jpg"} alt='slide' width={1600} height={1068} className='object-cover'/>

        </div>
        <div>
        <Image  src={"/slideShow3.0006489a.jpg"} alt='slide' width={1600} height={1068} className='object-cover'/>
        </div>

      </div>
    </div>
  )
}

export default Slide
