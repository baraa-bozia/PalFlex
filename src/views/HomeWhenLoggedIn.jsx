import React from 'react'
// import '../../css/Mainhead.css'; // سنستخدم هذا الملف لتنسيق الواجهة
import { useNavigate, useParams } from "react-router-dom";
import img1 from "../images/image1.avif";
import img2 from "../images/image2.jpg"
import img3 from "../images/image3.jpg"
export default function HomeWhenLoggedIn(props) {
    const navigate = useNavigate();
    const nameOfUser=useParams();
    const gotToNewPage=()=>{
      navigate("/CourseItem"); //اضيف صفحة تفاصيل الكورس هون
    }
  return (
    
       <div>
       <main className="bg-orange-100">
       <div className='flex flex-row ml-44'>
        <div>
       <h1 className='pb-10 mt-10 text-left text-xl mr-96 ' > Start your<br/><span className='text-orange-400'> educational</span> <br/>  journey   with us </h1>
       <p className='w-80'>The primary goal of education should be empowering individuals to be successful in life. Secondary goals include establishing values, 
        social skills, and work ethic. A good education system produces good citizens who are well-educated, well-mannered and disciplined
         <span id='more' className={'hidden'}>
         {/* <span id='more' className={bl?'hidden':'block'}> */}

          A good education system helps in the development of a country. 
         It helps in the advancement of technology and science. It helps in the development of the economy of the country. A good education system opens up the doors of employment and business opportunities for the people of the country.
          A good education system makes the people of the country more responsible and knowledgeable.
          </span>
          
        {/* {x=(document.getElementById('more'))} */}
        {/* // احذف الريد مور اذا ما زبط  */}
         </p>
         {/* <button id='myBtn' className='text-orange-400' onClick={()=>readMore1()}>{readMore?'Read Less << ':'Read More >>'  }</button> */}
         <button id='myBtn' className='text-orange-400'>Read More</button>

         </div>
        <div className="p-10 flex flex-row space-x-12">
          <div className='flex flex-col'>
          <img src={img1} className='rounded border w-40 h-64 mb-12'/>
          <img src={img3} className='rounded border w-40 h-52'/>
          </div>
          <img src={img2} className='rounded border w-60 h-[500px]'/>


          {/* <button onClick={() => gotToNewPage()} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'> Start</button> */}
        </div>
</div>
       
      </main>
    </div>
   
  )
}



