import React from 'react'
import { progressData } from '../../data/data'
import { HiOutlineChat, HiOutlineCalendar } from 'react-icons/hi'

function Progres() {
  return (
   <>
        <div className='mt-5 border-none rounded-md bg-slate-50  px-3 py-3 space-y-5'> 
          {/* title options */}
            <div className='flex justify-between'>
                <div className='border-b-2 border-orange-400'><h2 className=''>In Progress</h2></div>
                
                <h2>In Preview</h2>
                <h2>Completed</h2>
            </div>

        {/* content */}
            <div className='mx-3 space-y-5'>

                {
                    progressData?.map((val,i) => (
                        <div key={i} 
                        className='bg-white rounded-lg p-2 space-y-2 shadow-xl'
                        >
                            <h2 className='text-lg'>
                                {val.title}
                            </h2>
                            <p className='text-slate-400 text-sm'>
                                {val.description}
                            </p>
                            <button className='rounded-2xl bg-teal-300 border-none px-4 py-2 text-xs'>
                                {val.category}
                            </button>
                            
                            <div className='h-0.5 bg-slate-200 mx-5'/>
                            <div className='ml-3 flex justify-between'>
                                <p className='flex text-slate-400'>
                                    <HiOutlineChat />
                                    <span className='text-sm flex items-center'> {val.comment}</span>
                                </p>
                                <p className='text-slate-400 flex items-center text-sm space-x-1'>
                                    <HiOutlineCalendar />
                                    <span className='text-xs'> 25 Jun 2023</span>

                                   
                                </p>
                            </div>
                            

                        </div>
                    ))
                }

            </div>
        </div>
   
   
   </>
  )
}

export default Progres