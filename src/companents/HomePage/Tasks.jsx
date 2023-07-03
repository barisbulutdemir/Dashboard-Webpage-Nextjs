import React from 'react'
import { tasks } from '../../data/data'
import { HiOutlineStar } from 'react-icons/hi'

function Tasks() {
  return (
    <>
      <div className='basis-1/2 mt-3 rounded-md bg-slate-50  my-2'>
        <div className='mt-2'>
          <div className='flex justify-between mx-5 '>
            <h2>My Tasks</h2>
            <button className='text-slate-400 rounded-lg px-2 py-1 bg-white text-xs'>View All</button>
          </div>
        </div>

        <div className='mt-5 space-y-2 px-2'>
          { tasks.map ((val,i) => (
            <div key={i} className='basis-1/3 bg-white shadow flex items-center rounded-lg justify-between '>
              <div className='flex items-center'>
                <div className='p-3 m-1 bg-orange-200 rounded-lg'>
                <p className='text-orange-500'><HiOutlineStar /> </p>
                </div>
                <h1 className='text-sm'>{val.title}</h1>
              </div>
              <div className='h-5 w-5 border  rounded mx-5 hover:border-green-500 cursor-pointer'>
              </div>
            </div>
            
          ))}
        </div>

        
      </div>
    
    </>
  )
}

export default Tasks