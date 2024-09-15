// import React, { useState } from 'react';
// import '../../src/css/Login.css';
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// import DashToEachTeacher from '../components/organism/DashToEachTeacher';
// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import { useEffect } from 'react';
// import Course from '../components/organism/Course';
// function GoToAddCourse() {
//     const [title, setTitle] = useState('');
//     const [desc, setDesc] = useState('');
//     const [status, setStatus] = useState('');
//     const [price, setPrice] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // هنا تضع الكود الخاص بتسجيل الدخول
//         // console.log('Email:', email);
//         // console.log('Password:', password);
//     };



    
//     const navigate = useNavigate();


// const [courses,setCourses]=useState([]);
// const {teacherId}=useParams();

// const executeAdd =async() => {
      
//     // try{
    
//   await axios.post(`http://educational-platform-2024.runasp.net/api/addCourse/${teacherId}/${title}/${desc}/${status}/${price}`)
//   .then
//   ((res)=>setCourses(res.data))
//     // var response =  axios.get(`http://educational-platform-2024.runasp.net/api/addCourse/${teacherId}/${title}/${desc}/${status}/${price}`);
//     // console.log(response);
//     // alert('added successfully')
//     // /cheack according to email 
//     // setCourses(response.data);
// // }
// //   catch (error) {
// //     console.error(error);
// //   }
//   };

  

//     return (
//         <div className="login-container">
//             <form onSubmit={handleSubmit} className="login-form">
//                 <h2>Add Course</h2>
//                 {courses.map((obj1,index)=>{

// return(<p>{obj1.title}</p>)
// })}
//                 <div className="input-group">
//                     <label>Name of Course:</label>
//                     <input
//                         type="text"
//                         value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="input-group">
//                     <label>Description:</label>
//                     <input
//                         type="text"
//                         value={desc}
//                         onChange={(e) => setDesc(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="input-group">
//                     <label>Status:</label>
//                     <input
//                         type="text"
//                         value={status}
//                         onChange={(e) => setStatus(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <div className="input-group">
//                     <label>Price:</label>
//                     <input
//                         type="text"
//                         value={price}
//                         onChange={(e) => setPrice(e.target.value)}
//                         required
//                     />
//                 </div>
//                 <button onClick={()=>executeAdd()} type="submit" className="login-button">Add</button>
                
//             </form>
//         </div>
//     );
// }

// export default GoToAddCourse;


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
          var response1 = await axios.get(`http://educational-platform-2024.runasp.net/api/Dashborad/addCourse/${teacherId}/${course.title}/${course.desc}/${course.status}/${course.price}`);
          console.log(response1);
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
      <h2>Student Registration</h2>
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
        <button onClick={()=>gotToLogin()} type="submit">Register Student</button>
      </form>
    </div>
  );
}

export default SignUpStu;