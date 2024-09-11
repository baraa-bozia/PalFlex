import React, { useState } from 'react';
import '../../src/css/Login.css';
import { useNavigate } from "react-router-dom";

function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

const mainLog=async(logInUrl)=>{

//     const res=await fetch(logInUrl,
// {        mode: 'no-cors'
// }
//         ).then(response => 
//         response.json()).catch(error => console.log('Failed: ' + error.message));
// const response = await fetch(logInUrl, {
//     method: 'GET',
//     mode:'no-cors'
//   });
//   const string = await response.text();
//   const json = string === "" ? {} : JSON.parse(string);
// console.log('====================================');
// console.log(json);
// console.log('====================================');        }



let res=await fetch(logInUrl, {
    mode: "no-cors" // <----------------
});
const data=(await res).json;

try{
        let dataname=data.name;
        if(res.status===200){
            alert('error in user or password');
        // console.log(data);
 
        }
        else{
            alert('logged in successfully!');
            navigate("/homeWhenLogged");
                    console.log(data);

        }
        }
        // console.log(data);
    
    catch(error){
        console.log("error",error);
    }
}



// let result=await fetch(logInUrl, {
//     mode: "no-cors" // <----------------
// })
// .then((res)=>{
//     return res.text();
    
// })
// .then((data)=>{
//     console.log(data);

    // alert('logged in successfully!');
    // navigate("/homeWhenLogged");

    // return new Promise((resolve, reject)=>{
        // resolve(data ? JSON.parse(data) : {})
        // if(result.status===200 && result.data.success){
            // alert('logged success');
        // }
        // else{
            // alert('error in user or password');
        // }
    //     if(email=='husseinhamed845@gmail.com' && password=='HusseinAwad2000'){
    //     alert('logged in successfully!');
    // navigate("/homeWhenLogged");
    //     }
    //     else{
    //     alert('error in user or password!');
    //     }
//     })
// })
// }
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