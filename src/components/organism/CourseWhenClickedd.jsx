import React from 'react'
import img4 from '../../images/img4.jpg'
export default function CourseCard({course}) {
  return (
    <div key={course.id} >
        <img src={img4}></img>
        <h3 className='text-lg mt-[10px]'>Course Name: {course.title}</h3>
        <span className='text-zinc-600'>Teacher Name: {course.name}</span><br/>
        <span className='text-zinc-600'>Description: {course.description}</span><br/>

        <span className='text-zinc-600'>Status: {course.status}</span><br/>
        <span className='text-zinc-600'>Price: {course.price}</span>
        
    </div>
  )
}
