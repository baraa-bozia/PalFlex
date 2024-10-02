import React from 'react'
// import '../../css/Mainhead.css'; // سنستخدم هذا الملف لتنسيق الواجهة
import { useNavigate } from "react-router-dom";
// // import { useNavigate } from "react-router-dom";
// // import React, { useEffect, useState } from 'react'
// // import axios from "axios";

import { useParams } from "react-router";



// import { useNavigate, useParams } from "react-router-dom";
import  { useEffect, useState } from 'react'
import axios from "axios";


// // import CourseItem from './CourseItem';
// import { BrowserRouter, Routes, Router } from "react-router-dom";
// import { Link } from 'react-router-dom';
import CourseCard from "../components/organism/CourseCard";
import { Link } from 'react-router-dom';
import CourseWhenClicked from "../components/organism/CourseWhenClickedd";
import DashToEachTeacher from '../components/organism/DashToEachTeacher'
import { wait } from '@testing-library/user-event/dist/utils';
 const DeleteCourse = () => {
    const {idCourse}=useParams();

  const {teacherId}=useParams();
  const {courseId}=useParams();

       const [courses,setCourses]=useState([]);
    const navigate = useNavigate();
const goToAddCourse=()=>{
navigate(`/addCourse/${teacherId}`);
}
const deleteCourse=(id)=>{
  const newitem=courses.filter((item) => item.id !== id);
  setCourses(newitem);
  alert('deleted')
}
const goToDeleteCourse=async(cId)=>{
  // alert(cId);
  let param={
    id:cId,
  }
 let response2=await axios.get(`http://educational-platform-2024.runasp.net/api/Dashborad/deleteCourse/${param.id}`);
// if(response2 !='Null'){
//   alert('deleted successfully');
// }
setCourses(courses.filter((course)=>{
  return course.cId !== cId;
}))
alert('deleted')
console.warn(response2);


};
  const getProducts=async()=>{
        let response1;
         try{
          // const response=await axios.get('http://educational-platform-2024.runasp.net/api/Courses/AllCourses');
          // for(let i=0;i<response.data.length;i++){
           response1=await axios.get(`http://educational-platform-2024.runasp.net/api/Dashborad/getCoursesTeacher/${teacherId}`);
           console.log(response1.data)
    if(response1.data=='Null'){
      alert('there is not courses added yet!'+' You can add now')
    }
          // }
          // console.log(response1.data)
          else{
    setCourses(response1.data);
          }
         }  
            catch (error) {
              console.error(error);
            }
       }
       useEffect(()=>{
         getProducts();
       },[]);
       
  return (
    <div className='bg-slate-100'>
       <main className="">
        <div className="p-10">
          <h1 className=' text-center text-2xl'> Dashboard </h1>
        </div>
        <div className=' text-center p-20 pt-2 h-10 bg-gray-400'>
         <h1 className='text-xl mt-4'>  All my cources on the platform</h1>
        </div>
<div className='mt-20 text-gray-600 text-2xl'>
<h1 className="text-center font-bold text-lg mb-[10px]">Course Details</h1>

{courses.map((course,i)=>
          <div key={i}>
          {/* <Link to={`/CourseDetails/${course.iD}`}> */}
          <div className="ml-[480px] mb-[40px]">
               <DashToEachTeacher course={course} key={idCourse}/>
               {/* <button  className='mr-4 border-gray-300 border-2  text-emerald-100 bg-emerald-800 hover:text-white font-semibold py-2 px-6 border my-1 border-black hover:border-transparent rounded'>Edit</button>
               <button onClick={()=>goToDeleteCourse(course.id)} className=' border-gray-300 border-2  hover:text-emerald-100 hover:bg-emerald-800 text-emerald-700 font-semibold py-2 px-4 border my-1 border-black hover:border-transparent rounded'>Delete</button>    */}
                           </div>
               
               {/* <CourseWhenClicked></> */}
               {/* </Link> */}
               </div>
          )}
             
          
               
          



</div>
<div className='mt-10 text-center p-20 pt-6 h-10 bg-gray-400'>
<button onClick={()=>goToAddCourse()} className='mb-10 border-gray-300 border-2  hover:text-emerald-100 hover:bg-emerald-800 text-white font-semibold py-2 px-20 border my-1 border-black hover:border-transparent rounded'>
    Add Course
    </button>
    </div>
      </main>
    </div>
  )
}
export default DeleteCourse;


