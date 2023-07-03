"use client"

import { useState, useEffect } from 'react'

export default function Profiller() {

  const [person, setPerson] = useState([]);

  useEffect(() => {
    const getProfil = async () => {
      const response = await fetch(`http://127.0.0.1:8000/persons/`)
      const data = await response.json();
      setPerson(data);
    }
    getProfil();
  }, [])


  return (
    <>
      <div>
        <div className='border mt-5 '>
          <div className='flex'>
            <p className=' w-[20] ml-14'>ID</p>
            <div className='flex ml-6 w-[70%] justify-between'>
              <p className=''>Ad</p>
              <p className=''>Mail</p>
              <p className=''>Phone</p>
            </div>
           
          </div>
        </div>

        <div className=''>
        {person.map((user, i) => (
          <div key={i} 
          className='flex border my-4 w-[95%] mx-auto border-orange-200 rounded bg-white p-2 shadow
          cursor-pointer hover:scale-105 transition-all duration-200'>
            
              <p className='ml-5 w-6 flex justify-center items-center '>{i+1} <span className='text-slate-300 ml-3'>|</span>  </p>
              <div className='flex ml-5 w-full space-x-12  '>
                <p className='w-[20%]'>{user.username}</p>
                <p className='w-[40%]'>{user.email}</p>
                <p className='w-[40%]'>{user.phone_number}</p>
              </div>
          
         
        </div>
          
        ))}
        </div>
      </div>
    </>
  )
}
