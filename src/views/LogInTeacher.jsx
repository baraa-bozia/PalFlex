import React, { useState } from 'react';
import '../../src/css/Login.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
function LogInTeacher() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // هنا تضع الكود الخاص بتسجيل الدخول
        console.log('Email:', email);
        console.log('Password:', password);
    };
   

    
    const navigate = useNavigate();



let executeUserRegistration = async () => {
      
    try{
    
  
    var response = await axios.get(`http://educational-platform-2024.runasp.net/api/Authentication/login/${email}/${password}`);
    console.log(response);
    // cheack according to email 
    if(response.data=="Null"){
        alert('error in email or password!')
      

    }
    else{
        alert("logged in successfully");
        navigate("/dashboard");
  }
}
  catch (error) {
    console.error(error);
  }
  };


    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Login</h2>
                <div className="input-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button onClick={()=>executeUserRegistration()} type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
}

export default LogInTeacher;