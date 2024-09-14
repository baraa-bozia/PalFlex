// // import { useNavigate } from "react-router-dom";
// // import React, { useEffect, useState } from 'react'
// // import axios from "axios";

import { useParams } from "react-router";



// import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import axios from "axios";


// // import CourseItem from './CourseItem';
// import { BrowserRouter, Routes, Router } from "react-router-dom";
// import { Link } from 'react-router-dom';
import CourseCard from "../components/organism/CourseCard";

import CourseWhenClicked from "../components/organism/CourseWhenClickedd";
// import CourseWhenClickedd from "../components/organism/CourseWhenClickedd";


  const CourseDetails = () => {
    const {id}=useParams();
         const [courses,setCourses]=useState([]);

    const getProducts=async()=>{
          let response1;
           try{
            // const response=await axios.get('http://educational-platform-2024.runasp.net/api/Courses/AllCourses');
            // for(let i=0;i<response.data.length;i++){
             response1=await axios.get(`http://educational-platform-2024.runasp.net/api/CourseDetails/getCourse/${id}`);
             console.log(response1.data)
      
            // }
            // console.log(response1.data)
      setCourses(response1.data);
            
           }  
              catch (error) {
                console.error(error);
              }
         }
         useEffect(()=>{
           getProducts();
         },[])
    return (  
      <div> 
        {/* CourseDetails {id} */}
       {courses.map(course=>
          <div >
            <h1 className="text-center font-bold text-lg mb-[10px]">Course Details</h1>
          {/* <Link to={`/CourseDetails/${course.iD}`}> */}
          <div className="ml-[280px] mb-[40px]">
               <CourseWhenClicked course={course} key={id}/>
               <button className="mt-[20px]  border-gray-300 border-2     hover:text-emerald-100 hover:bg-emerald-400 text-green-700 font-semibold py-2 px-20 border my-1 border-black hover:border-transparent rounded">Join</button>
               </div>
               
               {/* <CourseWhenClicked></> */}
               {/* </Link> */}
               </div>
          )}
      </div>
    );
  }
   
  export default CourseDetails;