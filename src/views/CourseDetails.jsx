

import { useParams } from "react-router";



import React, { useEffect, useState } from 'react'
import axios from "axios";



import CourseCard from "../components/organism/CourseCard";

import CourseWhenClicked from "../components/organism/CourseWhenClickedd";
import { useDispatch } from "react-redux";
import { addCourse } from "../app/features/CourseD";
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
      <div className="bg-yellow-100"> 
        {/* CourseDetails {id} */}
       {courses.map(course=>
          <div >
            <h1 className="text-center font-bold text-lg mb-[20px]">Course Details</h1>
          {/* <Link to={`/CourseDetails/${course.iD}`}> */}
          <div className="ml-[280px] mb-[40px]">
               <CourseWhenClicked course={course} key={id}/>
               {/* <button onClick={()=>handleAddCourse(course)} className="ml-52 mt-[20px] w-28 mt-4 bg-orange-400 font-bold text-slate-50 hover:bg-slate-100 hover:text-orange-400  border-black border-[0.4px] rounded">Join</button> */}
               </div>
               
               {/* <CourseWhenClicked></> */}
               {/* </Link> */}
               </div>
          )}
      </div>
    );
  }
   
  export default CourseDetails;