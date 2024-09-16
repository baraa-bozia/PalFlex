


import React, { useState } from "react";
import "../../src/css/Student.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
function SignUpStu(props) {
  // const {id}// const {teacherId}=useParams();
const {teacherId}=useParams();

  const [course, setCourse] = useState({
    
    title: "",
    desc: "",
    status: "",
    price: "",
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(course);
  };
  const navigate = useNavigate();
  const gotToLogin=()=>{
    // navigate("/login");
    studentRegistration();
  }
  let studentRegistration = async () => {
  
    
        try{
   
    //update id++++++++++
    var response2 = await axios.get(`http://educational-platform-2024.runasp.net/api/Dashborad/getCoursesTeacher/${teacherId}`);

          var response1 = await axios.get(`http://educational-platform-2024.runasp.net/api/Dashborad/addCourse/${teacherId}/${course.title}/${course.desc}/${course.status}/${course.price}`);
          console.log(response1);
//           if(response2.data=='Null'){
// setCourse(response1.data);
// alert('Course Added')

//           }
        // cheack according to email 
        alert('Course Added')
        // if(response1.data=='Null'){
        //     alert('there is not courses added yet!'+' You can add now')
        //   }
        //         // }
        //         // console.log(response1.data)
        //         else{
        //   setCourse(response1.data);
        //   alert('Course Added')

        //         }
      }
      catch (error) {
        console.error(error);
      }
        
       
      }
   
  return (
    <div className="students-register-container">
      <h2>Add Course</h2>
      <form onSubmit={handleSubmit}>
      
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={course.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="desc"
          placeholder="Description"
          value={course.desc}
          onChange={handleChange}
        />
        <input
          type="text"
          name="status"
          placeholder="Status"
          value={course.status}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={course.price}
          onChange={handleChange}
        />
        <button onClick={()=>gotToLogin()} type="submit">Add Course</button>
      </form>
    </div>
  );
}

export default SignUpStu;