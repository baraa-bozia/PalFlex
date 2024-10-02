import React from 'react'
import img3 from '../../images/image8.jpg'
export default function DashToEachTeacher({course}) {
  return (
    <div key={course.id} >
        <img className='w-96 h-60' src={img3}></img>
        <span className='text-zinc-600'>course Name: {course.title}</span><br/>

        
        
    </div>
  )
}
