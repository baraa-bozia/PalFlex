import React from "react";
import withwrapper from "../HOC/withwrapper";
import { Link, NavLink } from "react-router-dom";
import NavBarLink from "../molecules/NavBarLink";
import Home from "../../views/Home";
import Shop from '../../views/Shop';
import Product from '../../views/Product';
import ContactUs from '../../views/ContactUs';

const navLinks=[
    {
        to: "/",
        text: <Home/>
    },
    {
        to: "/shop",
        text: <Shop/>
    },
    {
        to: "/product",
        text: <Product/>
    },
    {
        to: "/contactUs",
        text: <ContactUs/>
    }
]
function Navbar(){
    return(
        <div className="flex">
        <div className="flex gap-[260px] items-center py-[18px] mb-10">
           <div className="logo">
            <Link to="/" className="poppins-medium-italic text-[24px] ml-20">PalFlex</Link>
            </div>
            <ul className="flex gap-10">
                {/* navlink make active class for clicked item */}
            {/* <li><NavLink to="/">home</NavLink></li>
            <li><NavLink to="shop">shop</NavLink></li>
            <li><NavLink to="product">product</NavLink></li>
            <li><NavLink to="contactUs">contact us</NavLink></li> */}



            <NavBarLink to="/" text="Home"/>
            {/* <NavBarLink to="shop" text="Be a Tutor"/> */}
            {/* <NavBarLink to="product" text="Search About Tutor"/> */}
            <NavBarLink to="contactus" text="Aboutus"/>
            

            {/* instead of above redudunt code use this array of objects  */}
            {/* {
                navLinks.map((link,index)=><NavBarLink key={index} to={link.to} text={link.text}/>)
                
            } */}
            </ul>
         

           
        </div>
                <div className="flex items-center px-52 py-[18px] mb-10">

           <ul className="flex gap-10">
           <NavBarLink to="SignUp" text="Sign UP"/>
           <NavBarLink to="login" text="Log In"/>
</ul>
</div>
</div>
    )
}
const WrappedNavbar=withwrapper(Navbar);
export default WrappedNavbar;