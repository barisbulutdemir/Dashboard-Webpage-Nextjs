'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import AddNote from "@/companents/AddNote";



const Tasks = () => {

    const router = useRouter();

    let [notes, setNotes] = useState([]);

    useEffect(() => {
        getNotes()
         
    }, [])

    let getNotes = async () =>{
        let response = await fetch('http://127.0.0.1:8000/notes/')
        let data = await response.json()
        setNotes(data)
    }

    const handleClick = (id) => {
        router.push(`notes/${id}`);
    }

  return ( 
    <div>
        
        <div>
       
        </div>
        <div className='notes'>
        
            <div className='notes-header'>
                <h2 className='notes-title'>&#9782;</h2>
                <p className='notes-count'>{notes.length}</p>
            </div>
           
            {notes.map((note, index) => (
                
                <div key={index}
                className=''
                 >
                
                {note.body}
                
                
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default Tasks;