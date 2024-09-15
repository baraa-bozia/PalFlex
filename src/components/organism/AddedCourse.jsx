import React from 'react'
import img4 from '../../images/img4.jpg'
export default function CourseCard({course}) {
  return (
    <div key={course.id}>
        <img src={img4}></img>
        <h3 className='text-lg font-bold'>{course.title}</h3>
        <span className='text-zinc-600'>{course.description}</span><br/>
        <span className='text-zinc-600'>{course.status}</span>


    </div>
  )
}
