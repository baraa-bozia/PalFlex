import React from 'react'
import img4 from '../../images/image5.jpg'
export default function CourseCard({course}) {
  return (
    <div className='ml-1 relative ' key={course.id}>
      <div className=' hover:scale-105 hover:cursor-pointer'>
        <img className='border rounded-lg h-56 w-64 mb-2' src={img4}   />
    
  

        </div>
        <h3 className='text-lg font-bold'>{course.title}</h3>
        <span className='text-zinc-600'>{course.name}</span><br/>
        <span className='text-zinc-600'>{course.status}</span>

    </div>
  )
}
