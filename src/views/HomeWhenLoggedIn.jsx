import React from 'react'
// import '../../css/Mainhead.css'; // سنستخدم هذا الملف لتنسيق الواجهة
import { useNavigate, useParams } from "react-router-dom";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg"
import img3 from "../images/img3.jpg"
export default function HomeWhenLoggedIn(props) {
    const navigate = useNavigate();
    const nameOfUser=useParams();
    const gotToNewPage=()=>{
      navigate("/CourseItem"); //اضيف صفحة تفاصيل الكورس هون
    }
  return (
    <div>
       <main className="">
        {/* GET NAME FROM API */}
        <div className='text-lg'>{`Welcome Back`} </div>
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



