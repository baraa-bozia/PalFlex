import React, { useState } from "react";
import "../../src/css/Student.css";
import axios from "axios";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
function SignUpStu(props) {
  // const {id}=useParams();

  const [student, setStudent] = useState({
    
    class: "",
    academicDegree: "",
    interests: "",
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(student);
  };
  const navigate = useNavigate();
  const gotToLogin=()=>{
    // navigate("/login");
    studentRegistration();
  }
  let studentRegistration = async () => {
  
    
        try{
   
    //update id++++++++++
          var response1 = await axios.get(`http://educational-platform-2024.runasp.net/api/Authentication/signupStudent/31/${student.class}/${student.academicDegree}/${student.interests}`);
          console.log(response1);
        // cheack according to email 
        if(response1.data=="User Exist"){
          alert("user already exist");
    
        }
        else{
          alert('registered successfully')

          navigate("/login");
          console.log(response1.data.iD);
        
        }
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
          name="class"
          placeholder="Class"
          value={student.class}
          onChange={handleChange}
        />
        <input
          type="text"
          name="academicDegree"
          placeholder="Academic Degree"
          value={student.academicDegree}
          onChange={handleChange}
        />
        <input
          type="text"
          name="interests"
          placeholder="Interests"
          value={student.interests}
          onChange={handleChange}
        />
        <button onClick={()=>gotToLogin()} type="submit">Register Student</button>
      </form>
    </div>
  );
}

export default SignUpStu;