import React from 'react'
// import '../../css/Mainhead.css'; // سنستخدم هذا الملف لتنسيق الواجهة
import { useNavigate } from "react-router-dom";
import img1 from "../../images/image1.avif";
import img2 from "../../images/image2.jpg"
import img3 from "../../images/image3.jpg"
import { useState } from 'react';
export default function Mainhead(props) {
    const navigate = useNavigate();
    // const [readMore,setReadMore]=useState(false);
    // let more =document.getElementById('more');
  // const [bl,setBl]=useState(document.getElementById('more').className='hidden')
    const gotToNewPage=()=>{
      navigate("/Sign");
    }
   let x;
   const {isUserLoggedIn,userAuth}=props;

    const readMore1=()=>{
       // setBl(!bl);
      // setReadMore(!readMore);
      // document.getElementById('more').className='block';
     
      // document.getElementById("dots").innerHTML=""
      // document.getElementById('more').className='hidden';

      // document.getElementById('myBtn').innerHTML='Read Less'
      // document.getElementById('myBtn').onclick(()=>fun())

    }
    
    //   var dots = document.getElementById("dots");
    //   var moreText = document.getElementById("more");
    //   var btnText = document.getElementById("myBtn");
    
      // if (dots.className === "none") {
      //   dots.className = "inline";
      //   btnText.innerHTML = "Read more";
      //   moreText.className = "none";
      // } else {
      //   dots.className = "none";
      //   btnText.innerHTML = "Read less";
      //   moreText.className = "inline";
      // }
  // const extraContent=<div>
  //     <p className="extra-content">
  //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, consectetur neque ab 
  //       porro quasi culpa nulla rerum quis minus voluptatibus sed hic ad quo sint, libero 
  //       commodi officia aliquam! Maxime.
  //     </p>
  // </div>
  // const linkName=readMore?'Read Less << ':'Read More >> '
  // return (
  //   <div className="App">
  //     <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h2>{linkName}</h2></a>
  //     {readMore && extraContent}
  //   </div>
  // );

  //   }
  return (
    
    <div>
       <main className="bg-orange-100">
       <div className='flex flex-row ml-44'>
        <div>
        {/* <p id='logg'>{props.text}</p> */}
        {()=>userAuth()}

       <h1 className='pb-10 mt-10 text-left text-xl mr-96 ' > Start your<br/><span className='text-orange-400'> educational</span> <br/>  journey   with us </h1>
       <p className='w-80'>The primary goal of education should be empowering individuals to be successful in life. Secondary goals include establishing values, 
        social skills, and work ethic. A good education system produces good citizens who are well-educated, well-mannered and disciplined
         <span id='more' className={'hidden'}>
         {/* <span id='more' className={bl?'hidden':'block'}> */}

          A good education system helps in the development of a country. 
         It helps in the advancement of technology and science. It helps in the development of the economy of the country. A good education system opens up the doors of employment and business opportunities for the people of the country.
          A good education system makes the people of the country more responsible and knowledgeable.
          </span>
          
         </p>

         </div>
        <div className="p-10 flex flex-row space-x-12">
          <div className='flex flex-col'>
          <img src={img1} className='rounded border w-40 h-64 mb-12'/>
          <img src={img3} className='rounded border w-40 h-52'/>
          </div>
          <img src={img2} className='rounded border w-60 h-[500px]'/>


        </div>
</div>
       
      </main>
    </div>
  )
}









