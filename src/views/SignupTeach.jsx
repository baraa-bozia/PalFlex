import React, { useState } from "react";
import "../../src/css/Teacher.css";

function SignUpTeach() {
  const [teacher, setTeacher] = useState({
    id: "",
    user_id: "",
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
function mainSignUp(){
    
}
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(teacher);
  };

  return (
    <div className="teachers-register-container">
      <h2>Teacher Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* <input
          type="text"
          name="id"
          placeholder="ID"
          value={teacher.id}
          onChange={handleChange}
        /> */}
        {/* <input
          type="text"
          name="user_id"
          placeholder="User ID"
          value={teacher.user_id}
          onChange={handleChange}
        /> */}
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
        <button type="submit">Register Teacher</button>
      </form>
    </div>
  );
}

export default SignUpTeach;