import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import axios from "axios";

import tutor from '../../images/tutor.jpg'
import { useLayoutEffect } from "react";
import arrow from '../../images/next.png'
// import CourseItem from './CourseItem';
import { BrowserRouter, Routes, Router } from "react-router-dom";
import { Link } from 'react-router-dom';
import CourseCard from "./CourseCard";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/features/CourseD";
import toast from "react-hot-toast";
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
 
  export default function Course(course){
    const {id}=useParams();
     const navigate = useNavigate();
     const dispatch=useDispatch();
       const  gotToNewPage=async(course)=>{
        // dispatch(addToCart(course));
       
        const response1= await axios.get('http://educational-platform-2024.runasp.net/api/Courses/AllCourses');

      }
     const [courses,setCourses]=useState([]);

   
   const getProducts=async()=>{
     try{
      const response=await axios.get('http://educational-platform-2024.runasp.net/api/Courses/AllCourses');

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
  <dvi>
  <div className='mt-20 text-black-600 text-2xl text-center'>Our Cources</div>

     <div onClick={() => gotToNewPage(course)} className=" text-left grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-8 my-8">
          {courses.map(course=>
          <div className="bg-orange-100 p-6 border rounded-lg">
          <Link to={`/CourseDetails/${course.iD}`}>
               <CourseCard  course={course} key={course.iD}/>
               </Link>
               </div>
          )}
     </div>
    
     </dvi>
)
   
}

 
  