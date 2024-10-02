import React, { useState } from 'react';
import '../../src/css/Login.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import DashToEachTeacher from '../components/organism/DashToEachTeacher';
import { Link } from 'react-router-dom';
import HomeWhenLoggedIn from './HomeWhenLoggedIn';
function LogIn(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // هنا تضع الكود الخاص بتسجيل الدخول
        console.log('Email:', email);
        console.log('Password:', password);
    };
    // function performAction(e){
    
   
    //     let logInUrl=`http://educational-platform-2024.runasp.net/api/Authentication/login/${email}/${password}?fbclid=IwY2xjawFGxEhleHRuA2FlbQIxMAABHTzQacWcetL5DDc_fVfcTXIPZEM1mu9DbRsnc-ul1GyxPbgzr5glBmPkxA_aem_Pu2pbVF2141QQhgiVGz67w`;
    
    //     executeUserRegistration(logInUrl);
    // }


    
    const navigate = useNavigate();

// const mainLog=async(logInUrl)=>{

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
const [courses,setCourses]=useState([]);
let a;
// const {isUserLoggedIn,userAuth}=props;

let executeUserRegistration = async () => {
      
    try{
    
  
    var response = await axios.get(`http://educational-platform-2024.runasp.net/api/Authentication/login/${email}/${password}`);
    console.log(response);
    // cheack according to email 
    if(response.data=="Null"){
        alert('error in email or password!')

    }
    else if(response.data[0].user.role=='teacher' || response.data[0].user.role=='Teacher'){
        alert("logged in successfully");
        a=response.data[0].user.name;
        navigate(`/dashboard/${response.data[0].user.iD}`);
      
  }
    
    else{
        
        a=response.data[0].user.name;
        alert("logged in successfully");
        navigate("/HomeWhenLogged");
    //   props.isUserLoggedIn=true;
    //   userAuth(isUserLoggedIn)
        // <HomeWhenLoggedIn text={'true'}/>

  }
}
  catch (error) {
    console.error(error);
  }
  };

// let res=await fetch(logInUrl, {
//     mode: "no-cors" // <----------------
// });
// const data=(await res).json;

// try{
//         let dataname=data.name;
//         if(res.status===200){
//             alert('error in user or password');
//         // console.log(data);
 
//         }
//         else{
//             alert('logged in successfully!');
//             navigate("/homeWhenLogged");
//                     console.log(data);

//         }
//         }
//         // console.log(data);
    
//     catch(error){
//         console.log("error",error);
//     }
// }



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
        <div className="teachers-register-container">
            <form onSubmit={handleSubmit} >
                        {/* <HomeWhenLoggedIn text={'true'}/> */}

                {/* <h2>Login</h2> */}
                <h2>Welcome Back</h2>
                <h5 className='mb-3'>Please sign-in to continue!</h5>
                <p>{props.name1}</p>
                <div >
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className="w-28 mt-4 bg-orange-400 border rounded" onClick={()=>executeUserRegistration()} type="submit" >Login</button>
                
            </form>
        </div>
    );
}

export default LogIn;