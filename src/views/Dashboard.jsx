import React from 'react'
// import '../../css/Mainhead.css'; // سنستخدم هذا الملف لتنسيق الواجهة
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();
    const gotToNewPage=()=>{
      navigate("/Sign");
    }
  return (
    <div>
       <main className="">
        <div className="p-10">
          <h1 className='pb-10 mt-10 text-center text-2xl'> Dashboard </h1>
        </div>
        <div className='mt-10 text-center p-20 pt-6 h-10 bg-gradient-to-r from-green-400 via-gray-500 to-gray-500'>
         <h1 className='text-xl mt-3'>  All my cources on the platform</h1>
        </div>
<div className='mt-20 text-orange-600 text-2xl'>
    <img src='../images/tutor.jpg'/>
    <button className='mr-4 border-gray-300 border-2  text-emerald-100 bg-emerald-500 hover:text-green-700 font-semibold py-2 px-12 border my-1 border-black hover:border-transparent rounded'>Edit</button>
    <button className=' border-gray-300 border-2  hover:text-emerald-100 hover:bg-emerald-500 text-green-700 font-semibold py-2 px-12 border my-1 border-black hover:border-transparent rounded'>Delete</button>

</div>
<div className='mt-10 text-center p-20 pt-6 h-10 bg-gradient-to-r from-green-400 via-gray-500 to-gray-500'>
<button className='mb-10 border-gray-300 border-2  hover:text-emerald-100 hover:bg-emerald-500 text-white font-semibold py-2 px-20 border my-1 border-black hover:border-transparent rounded'>
    Add Course
    </button>
    </div>
      </main>
    </div>
  )
}



// function Course(props,{setShowNav}) {

// import React from 'react'; 
// import 'bootstrap/dist/css/bootstrap.css'; 
// import Row from 'react-bootstrap/Row';
// import arrow from '../images/next.png'
// function CourseItem(props) {
//   return (
//     <>
//      {/* <div className='flex box-content hover:space-x-8 px-[10px] py-[30px] border-solid border-2 border-red-100  rounded-lg mt-4 mx-3 shadow-xl '> */}
//     {/* <div className='box-border hover:space-x-11 hover:shadow-2xl hover:bg-emerald-500 px-[10px] py-[10px] h-47 w-48 my-4 mx-4 p-10 border-4 flex rounded-lg shadow-xl space-x-6'>
//       <h3 className='hover:text-emerald-100 '>{props.name}</h3>
      
    
//       <img src={arrow} style={{width:'40px'}}/>
//     </div>  */}
 
//     {/* <div>{props.desc}</div> */}
//     <div>hiiiiiii</div>
//     </>
//   );
// }


// export default CourseItem;


// const CourseItem = () => {
//   return <h1>Blog Articles</h1>;
// };

// export default CourseItem;import React from 'react';





