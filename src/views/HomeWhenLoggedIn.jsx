import React from 'react'
// import '../../css/Mainhead.css'; // سنستخدم هذا الملف لتنسيق الواجهة
import { useNavigate } from "react-router-dom";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
export default function HomeWhenLoggedIn() {
    const navigate = useNavigate();
    const gotToNewPage=()=>{
      navigate("/CourseItem"); //اضيف صفحة تفاصيل الكورس هون
    }
  return (
    <div>
       <main className="">
        {/* GET NAME FROM API */}
        <div className='text-lg'>Welcome Back </div>
        <div className="p-10 flex flex-row space-x-12">
          <img src={img1} className='w-96 h-96'/>
          <img src={img2} className='w-96 h-96'/>
          <img src={img3} className='w-96 h-96'/>


          {/* <button onClick={() => gotToNewPage()} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'> Start</button> */}
        </div>
        <h1 className='pb-10 mt-10 text-center text-xl' > Start your educational journey with us </h1>

       
<div className='mt-20 text-black-600 text-2xl text-center'>Our Cources</div>
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





