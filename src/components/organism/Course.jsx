import { useNavigate } from "react-router-dom";
import React from 'react'

import tutor from '../../images/tutor.jpg'
import { useLayoutEffect } from "react";
import arrow from '../../images/next.png'
// import CourseItem from './CourseItem';
import { BrowserRouter, Routes, Router } from "react-router-dom";
import { Link } from 'react-router-dom';
export default function Course(props){
    const navigate = useNavigate();
  const gotToNewPage=()=>{
    navigate("/SignUp");
  }
  
    return (
      <>
       {/* <div className='flex box-content hover:space-x-8 px-[10px] py-[30px] border-solid border-2 border-red-100  rounded-lg mt-4 mx-3 shadow-xl '> */}
      {/* <div onClick={() => gotToNewPage()} id='mainn' className=' box-border hover:shadow-2xl hover:bg-emerald-500 px-[10px] py-[10px] h-47 w-48
       my-4 mx-4 p-10 border-4 justify-center  m-auto rounded-lg shadow-xl space-x-6'>
        
        <h3 className='hover:text-emerald-100 ' >{props.name}</h3>
  
      
      </div> */}
      <div class="ml-40 grid grid-cols-3 place-items-stretch  h-48">
  <div  onClick={() => gotToNewPage()} class="text-gray-700 text-center bg-green-400 px-4 py-2 m-2 box-border hover:shadow-2xl hover:bg-emerald-500 px-[10px] py-[10px] h-47 w-48
       my-4 mx-4 p-10 border-4 justify-center  m-auto rounded-lg shadow-xl space-x-6">HTML</div>

  <div onClick={() => gotToNewPage()} class="text-gray-700 text-center bg-green-400 px-4 py-2 m-2 box-border hover:shadow-2xl hover:bg-emerald-500 px-[10px] py-[10px] h-47 w-48
       my-4 mx-4 p-10 border-4 justify-center  m-auto rounded-lg shadow-xl space-x-6">CSS</div>
  <div onClick={() => gotToNewPage()} class="text-gray-700 text-center bg-green-400 px-4 py-2 m-2 box-border hover:shadow-2xl hover:bg-emerald-500 px-[10px] py-[10px] h-47 w-48
       my-4 mx-4 p-10 border-4 justify-center  m-auto rounded-lg shadow-xl space-x-6">JS</div>
  <div onClick={() => gotToNewPage()} class="text-gray-700 text-center bg-green-400 px-4 py-2 m-2 box-border hover:shadow-2xl hover:bg-emerald-500 px-[10px] py-[10px] h-47 w-48
       my-4 mx-4 p-10 border-4 justify-center  m-auto rounded-lg shadow-xl space-x-6">React</div>
  <div onClick={() => gotToNewPage()} class="text-gray-700 text-center bg-green-400 px-4 py-2 m-2 box-border hover:shadow-2xl hover:bg-emerald-500 px-[10px] py-[10px] h-47 w-48
       my-4 mx-4 p-10 border-4 justify-center  m-auto rounded-lg shadow-xl space-x-6">React Native</div>
  <div onClick={() => gotToNewPage()} class="text-gray-700 text-center bg-green-400 px-4 py-2 m-2 box-border hover:shadow-2xl hover:bg-emerald-500 px-[10px] py-[10px] h-47 w-48
       my-4 mx-4 p-10 border-4 justify-center  m-auto rounded-lg shadow-xl space-x-6">PHP</div>
</div>
      
      </>
    );
  
  }
  