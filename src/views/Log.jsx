import React, { useState } from 'react';
import '../../src/css/Login.css';
import { useNavigate } from "react-router-dom";

function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("site") || "");
    const handleSubmit = (e) => {
        e.preventDefault();
        // هنا تضع الكود الخاص بتسجيل الدخول
        console.log('Email:', email);
        console.log('Password:', password);
    };
    function performAction(e){
    
   
        let logInUrl=`http://educational-platform-2024.runasp.net/api/Authentication/login/${email}/${password}?fbclid=IwY2xjawFGxEhleHRuA2FlbQIxMAABHTzQacWcetL5DDc_fVfcTXIPZEM1mu9DbRsnc-ul1GyxPbgzr5glBmPkxA_aem_Pu2pbVF2141QQhgiVGz67w`;
    
        mainLog(logInUrl);
    }
    const navigate = useNavigate();
    const mainLog = async (data) => {
        try {
          const response = await fetch(`http://educational-platform-2024.runasp.net/api/Authentication/login/${email}/${password}?fbclid=IwY2xjawFGxEhleHRuA2FlbQIxMAABHTzQacWcetL5DDc_fVfcTXIPZEM1mu9DbRsnc-ul1GyxPbgzr5glBmPkxA_aem_Pu2pbVF2141QQhgiVGz67w`, {
            method: "POST",
            mode: "no-cors",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          const res = await response.json();
          console.log(res);
        //   if (res.data) {
        //     setUser(res.data.user);
        //     setToken(res.token);
        //     localStorage.setItem("site", res.token);
        //     navigate("/HomeWhenLogged");
        //     return;
        //   }
        //   throw new Error(res.message);
        } catch (err) {
          console.error(err);
        }
      };
    // if((document.getElementById('datee').value.length == 0)||(document.getElementById('country').value.length == 0)){
    //     return;
    // }
  
    // else{
    // try{
    //     const data=await res.json();
    //     let dataname=data.name;
    //     console.log(dataname);
    //     alert('loged in');
    //     // document.getElementById('content').innerHTML=`<img src=${dataImage} width="420px"  margin-left: "20px" alt='this is image'/>`
    //     console.log(data);
    // }
    // catch(error){
    //     console.log("error",error);
    // }


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
                <button onClick={()=>performAction()} type="submit" className="login-button">Login</button>
            </form>
        </div>
    );
}

export default LogIn;