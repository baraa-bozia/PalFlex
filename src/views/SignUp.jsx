// import React from 'react'
// import { Link } from 'react-router-dom'


// // import SignUpStudent from './signUpStudent'
// // import signUpTeacher from './signUpTeacher'
// export default function SignUp() {
//   const navigate = useNavigate();

//   const gotToStudent=()=>{
//     navigate("/studentSignUp");
//   }
//   const gotToTeacher=()=>{
//     navigate("/teacherSignUp");
//   }
//   const gotToLogin=()=>{
//     navigate("/login");
//   }
//   return (
//     <div className='flex flex-col   ml-[20%] md:text-center '>
//       <h1 className='my-4 text-xl'>Sign Up</h1>
//       {/* <a href='#'>Sign Up As A Teacher</a> */}
//       <div className='flex flex-row'>
//       <label className='mt-5 px-6'>Name:</label>
//       <input type='text' className=" my-4 text-green-700 font-semibold py-2 px-20 border my-3 border-black  rounded"></input>
//       </div>

//       <div className='flex flex-row'>
//       <label className='mt-5 px-4'>Address:</label>
//       <input type='text' className=" my-4 text-green-700 font-semibold py-2 px-20 border my-3 border-black  rounded"></input>
//       </div>
      
     

//      <div className='flex flex-row'>
//      <label className='mt-5 px-6'>Email:</label>
//      <input type='text' className=" my-4  text-green-700 font-semibold py-2 px-20 border my-3 border-black  rounded"></input>
//      </div>

//      <div className='flex flex-row'>
//      <label className='mt-5 px-2.5'>Password:</label>
//      <input type='text' className=" my-4  text-green-700 font-semibold py-2 px-20 border my-3 border-black  rounded"></input>
//       </div>

//       <div className='flex flex-row'>
//      <label className='mt-5 px-7' >City:</label>
//      <input type='text' className=" my-4  text-green-700 font-semibold py-2 px-20 border my-3 border-black  rounded"></input>
//       </div>
      
//       <div className='flex flex-row'>
//       <label className='mt-5 px-7'>Role:</label>
//      <button onClick={() => gotToTeacher()} className=" my-4 hover:text-emerald-100 hover:bg-emerald-500 text-green-700 font-semibold py-2 px-20 border my-3 border-black hover:border-transparent rounded"><Link to={'#'}> Teacher</Link></button> 
//      <label className='mt-5 px-3'>OR:</label>
//      </div>
//      <button onClick={() => gotToStudent()} className="w-28 ml-24 px-28  my-4 hover:text-emerald-100 hover:bg-emerald-500 text-green-700 font-semibold py-2 px-20 border my-1 border-black hover:border-transparent rounded">Student</button> 
     

//       <h1 className='my-2'>Already Have an Account?</h1>
//      <button onClick={() => gotToLogin()} className="w-20 md:text-left m-auto my-4 hover:text-emerald-100 hover:bg-emerald-500 text-green-700 font-semibold py-2 px-20 border my-1 border-black hover:border-transparent rounded" ><Link to={"#"}>Log In</Link></button> 

//     </div>
//   )
// }
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
export default function SignUp() {
  const [student, setStudent] = useState({
    
    name: "",
    address: "",
    email: "",
    pswd:"",
    city:"",
    role:""
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudent(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(student);
  };
  // const [nameValue, setnameValue] = useState('');
  // const [addressValue, setaddressValue] = useState('');
  // const [emailValue, setemailValue] = useState('');
  // const [pswdValue, setpswdValue] = useState('');
  // const [cityValue, setcityValue] = useState('');
  // const [roleValue, setroleValue] = useState('');

      // const handleInputChange = (event) => {
      //   setnameValue(event.target.value);
      //   setaddressValue(event.target.value);
      //   setemailValue(event.target.value);
      //   setpswdValue(event.target.value);
      //   setcityValue(event.target.value);
      //   setroleValue(event.target.value);

      // };
  const navigate = useNavigate();

    const gotToStudent=()=>{
      // navigate("/studentSignUp");
      executeUserRegistration();
    }
    const gotToTeacher=()=>{
      navigate("/teacherSignUp");
      //اضيف اي بي اي
    }
    const gotToLogin=()=>{
      navigate("/login");
    }
   

     let executeUserRegistration = async () => {
      
      try{
      const options = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
    
      var response = await axios.get(`http://educational-platform-2024.runasp.net/api/Authentication/signup/${student.name}/photo/${student.address}/student/${student.email}/${student.pswd}/${student.city}`);
      console.log(response);
      // cheack according to email 
      if(response.data=="User Exist"){
        alert("user already exist");

      }
      else{
        navigate("/studentSignUp");
        console.log(response.data.iD);
        // كيف بدي انقل هذا الاي دي عشان استخدمه ف صفحة الستيودنت ب الاي بي اي 
        // var response1 = await axios.get(`http://educational-platform-2024.runasp.net/api/Authentication/signup/${response.data.data.ID}/photo/${student.address}/student/${student.email}/${student.pswd}/${student.city}`);
        // console.log(response);
      }
    }
    catch (error) {
      console.error(error);
    }
    };
    

    
return(

  <>
  {/* <button className=" my-1 md:text-left hover:text-emerald-500" onClick={() => navigate(-1)}>
                Go Back 
            </button> */}
            <div className="bg-slate-100">
<form onSubmit={handleSubmit} className="w-full m-auto max-w-sm ">

  <h1 className="ml-44 mb-10 text-green-700">Sign Up</h1>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
         Name:
      </label>
    </div>
    <div className="md:w-2/3">
      <input name="name" value={student.name} onChange={handleInputChange} className=" border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500" id="inline-full-name" type="text">
      </input>
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
        Address:
      </label>
    </div>
    <div classame="md:w-2/3">
      <input name="address" value={student.address} onChange={handleInputChange} className=" border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500">
      </input>
    </div>
  </div>

  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
        Email:
      </label>
    </div>
    <div className="md:w-2/3">
      <input name="email" value={student.email} onChange={handleInputChange} className=" border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500" >
      </input>
    </div>
  </div>

  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
        Password:
      </label>
    </div>
    <div className="md:w-2/3">
      <input name="pswd" value={student.pswd} onChange={handleInputChange} className=" border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500" id="inline-password" type="password" placeholder="******************">
      </input>
    </div>
  </div>
  
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
        City:
      </label>
    </div>
    <div className="md:w-2/3">
      <input name="city" value={student.city} onChange={handleInputChange} className=" border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500" >
      </input>
    </div>
  </div>

  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
        Role:
      </label>
    </div>
   
  </div>

  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button onClick={() => gotToTeacher()} className="  border-gray-300 border-2     hover:text-emerald-100 hover:bg-emerald-500 text-green-700 font-semibold py-2 px-20 border my-1 border-black hover:border-transparent rounded
" type="button">
      {/* shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded */}
        Teacher
      </button>
    </div>
  </div>

  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button onClick={() => gotToStudent()} className="  border-gray-300 border-2    hover:text-emerald-100 hover:bg-emerald-500 text-green-700 font-semibold py-2 px-20 border my-1 border-black hover:border-transparent rounded
" type="button">
      {/* shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded */}
Student      </button>
    </div>
  </div>

  
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4 ml-50" >
        Already Have an Acount?
      </label>
    </div>
    
  </div>

  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <button onClick={() => gotToLogin()} className="    border-gray-300 border-2  hover:text-emerald-100 hover:bg-emerald-500 text-green-700 font-semibold py-2 px-20 border my-1 border-black hover:border-transparent rounded
" type="button">
      {/* shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded */}
        Log In
      </button>
    </div>
  </div>
</form>
</div>
</> 
);
}



