import Navbar from "./components/organism/Navbar";
import WrappedNavbar from "./components/organism/Navbar";
import {BrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom';
import {router} from './router/index'
import Home from "./views/Home";
import ContactUs from "./views/ContactUs";
import Mainhead from "./components/organism/Mainhead";
import  Course  from "./components/organism/Course";
import Footerr from "./components/organism/Footerr";
import SignUp from "./views/SignUp";
import Sign from "./views/Sign";
import LogIn from "./views/LogIn";
import SignUpStu from "./views/SignUpStu";
import SignUpTeach from "./views/SignupTeach";
import Dashboard from "./views/Dashboard";
import HomeWhenLoggedIn from "./views/HomeWhenLoggedIn";
import Log from "./views/Log";
import CourseWhenLogged from "./components/organism/CourseWhenLogged";
import CourseDetails from "./views/CourseDetails";
import LogInTeacher from "./views/LogInTeacher";
import GoToAddCourse from "./views/GoToAddCourse";
import DeleteCourse from "./views/DeleteCourse";
import AboutUs from "./views/AboutUs";
import "./App.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Cart from "./views/Cart";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
function App() {
const[isUserLoggedIn,setUserLoggedIn]=useState(false);
const userAuth=()=>{
  setUserLoggedIn(!isUserLoggedIn);
}
  let [navFlag,setNavFlag]=useState(false);
  const[hideNav,sethideNav]=useState(true);

 
  return (
    <div >
       
<Navbar isUserLoggedIn={isUserLoggedIn} userAuth={userAuth}/>

            
      
      <Routes>
        <Route path="/" element={
          <>
                     

          <Mainhead text={'false'}/>
          <Course />
          <Footerr/>
          
          </>
        }
          
          ></Route>
        <Route path="Sign" element={<Sign/>}></Route>
        <Route path="/CourseDetails/:id" element={<CourseDetails/>}></Route>
        <Route path="/deleteCourse/:idCourse" element={<DeleteCourse/>}></Route>


        <Route path="homeWhenLogged" element={
          <>
          


          
          <HomeWhenLoggedIn isUserLoggedIn={true} userAuth={userAuth} />
          <CourseWhenLogged/>
          {/* <Dashboard/> */}
          <Footerr/>
          </>
      }></Route>

        <Route path="SignUp" element={<SignUp/>}></Route>
      
        <Route path="login" element={<>

          <LogIn a='hala'/>
                            </>

      }></Route>

        <Route path="studentSignUp" element={<SignUpStu/>}></Route>
        <Route path="teacherSignUp" element={<SignUpTeach/>}></Route>
        <Route path="/dashboard/:teacherId" element={<Dashboard/>}></Route>

        
        <Route path="contactUs" element={<ContactUs/>}></Route>
        <Route path="aboutUs" element={<AboutUs/>}></Route>
        <Route path="cart" element={<Cart/>}></Route>

        <Route path="/addCourse/:teacherId" element={<GoToAddCourse/>}></Route>


      </Routes>

    </div>
  );
}

export default App;
