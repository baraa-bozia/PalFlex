import React from 'react'
import img3 from '../../images/img3.jpg'
export default function DashToEachTeacher({course}) {
  return (
    <div className='' key={course.id} >
        <img className='w-96' src={img3}></img>
        <span className='text-zinc-600'>course Name: {course.title}</span><br/>

        
        
    </div>
  )
}
