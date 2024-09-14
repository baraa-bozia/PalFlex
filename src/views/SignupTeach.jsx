import React, { useState } from "react";
import "../../src/css/Teacher.css";
import { useNavigate } from "react-router";
import axios from "axios";
function SignUpTeach() {
  const [teacher, setTeacher] = useState({
   
    academicDegree: "",
    experience: "",
    phone: "",
    birthdate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(teacher);
  };
  const navigate = useNavigate();
  const gotToLogin=()=>{
    // navigate("/login");
    studentRegistration();
  }
  let studentRegistration = async () => {
  
    
        try{
   
    //update id++++++++++
          var response1 = await axios.get(`http://educational-platform-2024.runasp.net/api/Authentication/signupTeacher/31/${teacher.academicDegree}/${teacher.experience}/${teacher.phone}/${teacher.birthdate}`);
          console.log(response1);
        // cheack according to email 
        if(response1.data=="User Exist"){
          alert("user already exist");
    
        }
        else{
          alert('registered successfully')
          navigate("/loginteacher");
          console.log(response1.data.iD);
        
        }
      }
      catch (error) {
        console.error(error);
      }
        
       
      }
   
  return (
    <div className="teachers-register-container">
      <h2>Teacher Registration</h2>
      <form onSubmit={handleSubmit}>
       
        <input
          type="text"
          name="academicDegree"
          placeholder="Academic Degree"
          value={teacher.academicDegree}
          onChange={handleChange}
        />
        <input
          type="text"
          name="experience"
          placeholder="Experience"
          value={teacher.experience}
          onChange={handleChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={teacher.phone}
          onChange={handleChange}
        />
        <input
          type="date"
          name="birthdate"
          placeholder="Birthdate"
          value={teacher.birthdate}
          onChange={handleChange}
        />
        <button onClick={()=>gotToLogin()} type="submit">Register Teacher</button>
      </form>
    </div>
  );
}

export default SignUpTeach;