import React, { useState } from "react";
import withwrapper from "../HOC/withwrapper";
import { Link, NavLink } from "react-router-dom";
import NavBarLink from "../molecules/NavBarLink";
import Home from "../../views/Home";
import ContactUs from '../../views/ContactUs';
import AboutUs from "../../views/AboutUs";
import Course from "./Course";
const navLinks=[
    {
        to: "/",
        text: <Home/>
    },
    {
        to: "/aboutUs",
        text: <AboutUs/>
    },
    
    {
        to: "/contactUs",
        text: <ContactUs/>
    }
]
function NavWhenLogged({Logged}){
    // const [Logged,setLogged]=useState(false);
    if(Logged==false){
        
            return(
                <div className="flex">
                <div className="flex gap-[100px] items-center py-[10px] mb-8 m-auto">
                   <div className="logo">
                    <Link to="/" className="text-orange-400 poppins-medium-italic text-[24px]  mr-[-30px]">PalFlex</Link>
                    </div>
                    <ul className="flex gap-10">
                    <NavBarLink to="/" text="Home"/>
                    <NavBarLink to="aboutUs" text="Aboutus"/>
                    <NavBarLink to="contactUs" text="ContactUs"/>
        
                    </ul>
                   
                </div>
                        <div className="flex items-center px-80 py-[10px] mb-8">
        
                   <ul className="flex mr-[-160px] gap-10">
                  <button className="transition ease-in 50ms border-orange-400 hover:text-orange-400 hover:bg-slate-100 border rounded px-1 "> <NavBarLink to="SignUp" text="Sign UP"/></button>
                  <button className=" transition ease-in 50ms bg-orange-400 text-cyan-50 p-1  hover:text-orange-400 hover:bg-slate-100 px-2 font-semibold border  border-black  hover:border-black rounded"> <NavBarLink to="login" text="Log In"/></button>
        </ul>
        </div>
        </div>
            )
        
    }
    else{
    return(
        <div className="flex">
        <div className="flex gap-[100px] items-center py-[10px] mb-8 m-auto">
           <div className="logo">
            <Link to="/" className="text-orange-400 poppins-medium-italic text-[24px]  mr-[-30px]">PalFlex</Link>
            </div>
            <ul className="flex gap-10">
              



            <NavBarLink to="/" text="Home"/>
            {/* <NavBarLink to="shop" text="Be a Tutor"/> */}
\            

            <NavBarLink to="aboutUs" text="Aboutus"/>
            <NavBarLink to="contactUs" text="ContactUs"/>

            

            {/* instead of above redudunt code use this array of objects  */}
            {/* {
                navLinks.map((link,index)=><NavBarLink key={index} to={link.to} text={link.text}/>)
                
            } */}
            </ul>
         

           
        </div>
                <div className="flex items-center px-80 py-[10px] mb-8">

           <ul className="flex mr-[-160px] gap-10">
          <button className="transition ease-in 50ms border-orange-400 hover:text-orange-400 hover:bg-slate-100 border rounded px-1 "> <NavBarLink to="SignUp" text="Log Out"/></button>
          {/* <button className=" transition ease-in 50ms bg-orange-400 text-cyan-50 p-1  hover:text-orange-400 hover:bg-slate-100 px-2 font-semibold border  border-black  hover:border-black rounded"> <NavBarLink to="login" text="Log In"/></button> */}
</ul>
</div>
</div>
    )
}
}
const WrappedNavbar=withwrapper(NavWhenLogged);
export default NavWhenLogged;
// export default WrappedNavbar;