import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import axios from "axios";


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
        alert('you should sign up or log in first!');
                 navigate("/SignUp");

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
          <div className="bg-orange-100 p-6 border rounded-lg">
               <CourseCard course={course} key={course.iD}/>
               </div>
          )}
     </div>
   
     </>
)
   
}



  