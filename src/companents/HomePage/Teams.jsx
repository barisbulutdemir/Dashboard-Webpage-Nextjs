import React from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { teamMember } from "../../data/data"
import Image from 'next/image'

function Teams() {

  return (
    <>
    <div className='flex items-center  mt-8 space-x-7'>
        <div className='flex gap-4 items-center '>
              <h3 className='flex text-xl'>Team <span className='flex items-center text-xl mt-1'><HiChevronDown /></span></h3>
              <p className='text-slate-300 text-xl'>|</p>
          </div>

          <div className='flex space-x-1 mt-1'>
          {
              teamMember?.map((val,i) => (
                <div key={i} 
                className='flex flex-col mt-2 items-center justify-center cursor-pointer  hover:underline '>
                  <Image
                  className='rounded-full w-6 h-auto  '
                   src={val.img} 
                  
                  alt='pp' />
                  <h5 className='text-xs '>{val.name}</h5>
                </div>
              ))
            }
            
          </div>
          <p className='text-xl text-slate-300 '>|</p>
          <button className=' py-1 px-4 border-none text-orange-600 bg-orange-200 rounded-2xl text-sm hover:bg-orange-300 transition-all duration-300 shadow-md'> 
            + Invite
          </button>
        
    </div>

    </>
  )
}

export default Teams