import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import axios from "axios";

import tutor from '../../images/tutor.jpg'
import { useLayoutEffect } from "react";
import arrow from '../../images/next.png'
// import CourseItem from './CourseItem';
import { BrowserRouter, Routes, Router } from "react-router-dom";
import { Link } from 'react-router-dom';
import CourseCard from "./CourseCard";
export const prod=
[
     {
       "id": "1",
       "thumbnail": "../../images/img4.jpg",
       "title": "Wireless Mouse",
       "price": 25.99
     },
     {
       "id": "2",
       "thumbnail": "../../images/img4.jpg",
       "title": "Bluetooth Headphones",
       "price": 79.99
     },
     {
       "id": "3",
       "thumbnail": "../../images/img4.jpg",
       "title": "Laptop Stand",
       "price": 35.50
     },
     {
       "id": "4",
       "thumbnail": "../../images/img4.jpg",
       "title": "Smartphone Charger",
       "price": 15.00
     },
     {
       "id": "5",
       "thumbnail": "../../images/img4.jpg",
       "title": "Portable SSD",
       "price": 120.00
     }
   ]
  export default function Course(){
     const navigate = useNavigate();
       const gotToNewPage=()=>{
        //  navigate("/Sign");
        alert('you should sign up or log in first!')
       }
     const [courses,setCourses]=useState([]);

   
   const getProducts=async()=>{
     try{
// const response=await axios.get('https://dummyjson.com/products');
const response=await axios.get('http://educational-platform-2024.runasp.net/api/Courses/AllCourses');
// response.headers( {'Content-Type': 'application/json'});

// response.headers('"Access-Control-Allow-Origin", "*"');
// response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
setCourses(response.data);
     }  
        catch (error) {
          console.error(error);
        }
   }
   useEffect(()=>{
     getProducts();
   },[])
return(
  <>
<div className='mt-20 text-black-600 text-2xl text-center'>Our Cources</div>
<div id="cc" onClick={() => gotToNewPage()} className=" text-left grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8 my-8">
          {courses.map(course=>
               <CourseCard course={course} key={course.iD}/>
          )}
     </div>
     </>
)
   
}
// export default function Course(props){
//     const navigate = useNavigate();
//   const gotToNewPage=()=>{
//     navigate("/Sign");
//   }
  
//     return (
//       <>
     
//       <div className="ml-40 grid grid-cols-3 place-items-stretch  h-48">
//   <div  onClick={() => gotToNewPage()} className="text-gray-700 text-center bg-blue-300 px-4 py-2 m-2 box-border hover:shadow-2xl hover:bg-emerald-300 px-[10px] py-[10px] h-47 w-48
//        my-4 mx-4 p-10 border-4 justify-center  m-auto rounded-lg shadow-xl space-x-6">HTML</div>

//   <div onClick={() => gotToNewPage()} className="text-gray-700 text-center bg-blue-300 px-4 py-2 m-2 box-border hover:shadow-2xl hover:bg-emerald-300 px-[10px] py-[10px] h-47 w-48
//        my-4 mx-4 p-10 border-4 justify-center  m-auto rounded-lg shadow-xl space-x-6">CSS</div>
//   <div onClick={() => gotToNewPage()} className="text-gray-700 text-center bg-blue-300 px-4 py-2 m-2 box-border hover:shadow-2xl hover:bg-emerald-300 px-[10px] py-[10px] h-47 w-48
//        my-4 mx-4 p-10 border-4 justify-center  m-auto rounded-lg shadow-xl space-x-6">JS</div>
//   <div onClick={() => gotToNewPage()} className="text-gray-700 text-center bg-blue-300 px-4 py-2 m-2 box-border hover:shadow-2xl hover:bg-emerald-300 px-[10px] py-[10px] h-47 w-48
//        my-4 mx-4 p-10 border-4 justify-center  m-auto rounded-lg shadow-xl space-x-6">React</div>
//   <div onClick={() => gotToNewPage()} className="text-gray-700 text-center bg-blue-300 px-4 py-2 m-2 box-border hover:shadow-2xl hover:bg-emerald-300 px-[10px] py-[10px] h-47 w-48
//        my-4 mx-4 p-10 border-4 justify-center  m-auto rounded-lg shadow-xl space-x-6">React Native</div>
//   <div onClick={() => gotToNewPage()} className="text-gray-700 text-center bg-blue-300 px-4 py-2 m-2 box-border hover:shadow-2xl hover:bg-emerald-300 px-[10px] py-[10px] h-47 w-48
//        my-4 mx-4 p-10 border-4 justify-center  m-auto rounded-lg shadow-xl space-x-6">PHP</div>
// </div>
      
//       </>
//     );
  
//   }
  