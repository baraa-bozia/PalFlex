import React from 'react'
import img4 from '../../images/image7.jpeg'
import { useDispatch } from "react-redux";
import { addCourse } from "../../app/features/CourseD";
import { useNavigate } from 'react-router';
import toast from 'react-hot-toast';
export default function CourseCard({course}) {
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const handleAddCourse=(course)=>{
  dispatch(addCourse(course));
  toast.success('Course added succesfully')
  // navigate('/cart');
  }
  return (
    <div className='ml-52' key={course.id} >
        <img className='w-96 border rounded-md' src={img4}></img>
        <h3 className='text-lg mt-[10px]'>Course Name: {course.title}</h3>
        <span className='text-zinc-600'>Teacher Name: {course.name}</span><br/>
        <span className='text-zinc-600'>Description: {course.description}</span><br/>

        <span className='text-zinc-600'>Status: {course.status}</span><br/>
        <span className='text-zinc-600'>Price: {course.price}</span>
        <button onClick={()=>handleAddCourse(course)} className="ml-52 mt-[20px] w-28 mt-4 bg-orange-400 font-bold text-slate-50 hover:bg-slate-100 hover:text-orange-400  border-black border-[0.4px] rounded">Join</button>

        
    </div>
  )
}
