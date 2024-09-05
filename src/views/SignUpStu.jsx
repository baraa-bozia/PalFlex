import React, { useState } from "react";
import "../../src/css/Student.css";

function SignUpStu() {
  const [student, setStudent] = useState({
    id: "",
    user_id: "",
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

  return (
    <div className="students-register-container">
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="id"
          placeholder="ID"
          value={student.id}
          onChange={handleChange}
        />
        <input
          type="text"
          name="user_id"
          placeholder="User ID"
          value={student.user_id}
          onChange={handleChange}
        />
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
        <button type="submit">Register Student</button>
      </form>
    </div>
  );
}

export default SignUpStu;