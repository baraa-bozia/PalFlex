import React from "react";
import withwrapper from "../HOC/withwrapper";
import { Link, NavLink, useLocation } from "react-router-dom";
import NavBarLink from "../molecules/NavBarLink";
import Home from "../../views/Home";
import ContactUs from '../../views/ContactUs';
import AboutUs from "../../views/AboutUs";
import Course from "./Course";
import NavWhenLogged from "./NavWhenLogged";
import { AcademicCapIcon } from '@heroicons/react/24/solid'
import { useSelector } from "react-redux";

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
const withoutNav=["/homeWhenLogged"];
function Navbar(props){
    const {isUserLoggedIn,userAuth}=props;
    const cart=useSelector((state)=>state.course.products)
    console.log(cart);
// if(Logged==false){
// const{pathname}=useLocation();
// if(withoutNav.some((item)=>pathname.includes(item)))return null;
    return(
        
        <div className="flex">
            {isUserLoggedIn?(

            <>
        <div className="flex gap-[100px] items-center py-[10px] mb-8 m-auto">
           <div className="logo">
            <Link to="/" className="text-orange-400 poppins-medium-italic text-[24px]  mr-[-30px]">PalFlex</Link>
            </div>
            <ul className="flex gap-10">
            <NavBarLink to="/" text="Home"/>
            <NavBarLink to="aboutUs" text="Aboutus"/>
            <NavBarLink to="contactUs" text="ContactUs"/>
            <div className="relative">
   <Link to={'cart'}> <AcademicCapIcon width={25} className="mr-10"/></Link>
   <div className="bg-orange-400 text-white rounded-full flex justify-center items-center text-[12px] w-5 h-5 absolute top-[-5px] right-[30px]">{cart.length}</div>
</div>
            </ul>
           
        </div>
                <div className="flex items-center px-80 py-[10px] mb-8">

           <ul className="flex mr-[-160px] gap-10">
            {/* <NavWhenLogged Logged={Logged}/> */}
            {/* {document.getElementById('logg').innerText!='true'? */}
            
            
          <button className="transition ease-in 50ms border-orange-400 hover:text-orange-400 hover:bg-slate-100 border rounded px-1 "> <NavBarLink to="/" text="Log Out"/></button>
          {/* <button className=" transition ease-in 50ms bg-orange-400 text-cyan-50 p-1  hover:text-orange-400 hover:bg-slate-100 px-2 font-semibold border  border-black  hover:border-black rounded"> <NavBarLink to="login" text="Log In"/></button> */}
          
        
</ul>

</div>

</>
            ):
            <>

            <div className="flex gap-[100px] items-center py-[10px] mb-8 m-auto">
            <div className="logo">
             <Link to="/" className="text-orange-400 poppins-medium-italic text-[24px]  mr-[-30px]">PalFlex</Link>
             </div>
             <ul className="flex gap-10">
             <NavBarLink to="/" text="Home"/>
             <NavBarLink to="aboutUs" text="Aboutus"/>
             <NavBarLink to="contactUs" text="ContactUs"/>
             {/* <div className="relative">
    <Link to={'cart'}> <AcademicCapIcon width={25} className="mr-10"/></Link>
    <div className="bg-orange-400 text-white rounded-full flex justify-center items-center text-[12px] w-5 h-5 absolute top-[-5px] right-[30px]">{cart.length}</div>
 </div> */}
             </ul>
             </div>
                <div className="flex items-center px-80 py-[10px] mb-8">

           <ul className="flex mr-[-160px] gap-10">
            {/* <NavWhenLogged Logged={Logged}/> */}
            {/* {document.getElementById('logg').innerText!='true'? */}
            <div className="relative">
    <Link to={'cart'}> <AcademicCapIcon width={25} className="mr-10"/></Link>
    <div className="bg-orange-400 text-white rounded-full flex justify-center items-center text-[12px] w-5 h-5 absolute top-[-5px] right-[30px]">{cart.length}</div>
 </div>
          <button className="transition ease-in 50ms border-orange-400 hover:text-orange-400 hover:bg-slate-100 border rounded px-1 "> <NavBarLink to="SignUp" text="Sign Up"/></button>
          <button className=" transition ease-in 50ms bg-orange-400 text-cyan-50 p-1  hover:text-orange-400 hover:bg-slate-100 px-2 font-semibold border  border-black  hover:border-black rounded"> <NavBarLink to="login" text="Log In"/></button>
        
          
</ul>

</div>

</>

}

</div>
    )

  
}
const WrappedNavbar=withwrapper(Navbar);
export default Navbar;
// export default WrappedNavbar;