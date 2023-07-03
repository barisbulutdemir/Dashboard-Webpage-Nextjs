import Link from 'next/link'
import React from 'react'


export default function Menu() {
  return (
    <div className=''>
        <div className=''>
            <div className='mt-6'>
                <h3 className='text-3xl font-Arvo'>./Logo</h3>
            </div>
            <div className='mt-20 flex flex-col gap-3'>
                <Link href="/" className='cursor-pointer'><h4 className='text-lg'>Anasayfa</h4></Link>
                <Link href="/persons/" className='cursor-pointer'><h4 className='text-lg'lg>Personeller</h4></Link>
                <h4 className='text-lg'>Projeler</h4>
                <h4 className='text-lg'>Tasks</h4>
                <h4 className='text-lg'>Profil</h4>

            </div>

        </div>
        
    </div>
  )
}
