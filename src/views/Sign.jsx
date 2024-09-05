
import { useNavigate } from "react-router-dom";
export default function Sign() {
  const navigate = useNavigate();

    // const gotToStudent=()=>{
    //   navigate("/studentSignUp");
    // }
    const gotToTeacher=()=>{
      navigate("/SignUp");
    }
    const gotToLogin=()=>{
      navigate("/login");
    }
return(

  <>
  {/* <button className=" my-1 md:text-left hover:text-emerald-500" onClick={() => navigate(-1)}>
                Go Back 
            </button> */}
<form class="w-full m-auto max-w-sm">

  <h1 className="ml-44 mb-10 text-green-700">Welcome To our Web Site : <br/>
  You Should to sign up first
  </h1>
  
 

  <div class="md:flex md:items-center">
    <div class="md:w-1/3"></div>
    <div class="md:w-2/3">
      <button onClick={() => gotToTeacher()} class="  border-gray-300 border-2     hover:text-emerald-100 hover:bg-emerald-500 text-green-700 font-semibold py-2 px-20 border my-1 border-black hover:border-transparent rounded
" type="button">
      {/* shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded */}
        Sign Up
      </button>
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
</> 
);
}