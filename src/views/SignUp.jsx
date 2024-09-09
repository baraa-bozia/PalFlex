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
export default function SignUp() {
  const navigate = useNavigate();

    const gotToStudent=()=>{
      navigate("/studentSignUp");
    }
    const gotToTeacher=()=>{
      navigate("/teacherSignUp");
      //اضيف اي بي اي
    }
    const gotToLogin=()=>{
      navigate("/login");
    }
return(

  <>
  {/* <button className=" my-1 md:text-left hover:text-emerald-500" onClick={() => navigate(-1)}>
                Go Back 
            </button> */}
            <div className="bg-slate-100">
<form class="w-full m-auto max-w-sm ">

  <h1 className="ml-44 mb-10 text-green-700">Sign Up</h1>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
         Name:
      </label>
    </div>
    <div class="md:w-2/3">
      <input class=" border-2 border-gray-300 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500" id="inline-full-name" type="text">
      </input>
    </div>
  </div>
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
        Address:
      </label>
    </div>
    <div class="md:w-2/3">
      <input class=" border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500">
      </input>
    </div>
  </div>

  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
        Email:
      </label>
    </div>
    <div class="md:w-2/3">
      <input class=" border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500" >
      </input>
    </div>
  </div>

  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
        Password:
      </label>
    </div>
    <div class="md:w-2/3">
      <input class=" border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500" id="inline-password" type="password" placeholder="******************">
      </input>
    </div>
  </div>
  
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" >
        City:
      </label>
    </div>
    <div class="md:w-2/3">
      <input class=" border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-emerald-500" >
      </input>
    </div>
  </div>

  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
        Role:
      </label>
    </div>
   
  </div>

  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      <button onClick={() => gotToTeacher()} class="  border-gray-300 border-2     hover:text-emerald-100 hover:bg-emerald-500 text-green-700 font-semibold py-2 px-20 border my-1 border-black hover:border-transparent rounded
" type="button">
      {/* shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded */}
        Teacher
      </button>
    </div>
  </div>

  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      <button onClick={() => gotToStudent()} class="  border-gray-300 border-2    hover:text-emerald-100 hover:bg-emerald-500 text-green-700 font-semibold py-2 px-20 border my-1 border-black hover:border-transparent rounded
" type="button">
      {/* shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded */}
Student      </button>
    </div>
  </div>

  
  <div class="md:flex md:items-center mb-6">
    <div class="md:w-1/3">
      <label class="block text-gray-500 font-bold md:text-center mb-1 md:mb-0 pr-4 ml-50" >
        Already Have an Acount?
      </label>
    </div>
    
  </div>

  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      <button onClick={() => gotToLogin()} class="    border-gray-300 border-2  hover:text-emerald-100 hover:bg-emerald-500 text-green-700 font-semibold py-2 px-20 border my-1 border-black hover:border-transparent rounded
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