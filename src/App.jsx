import Navbar from "./components/organism/Navbar";
import WrappedNavbar from "./components/organism/Navbar";
import {BrowserRouter, Route, RouterProvider, Routes} from 'react-router-dom';
import {router} from './router/index'
import Home from "./views/Home";
import Shop from "./views/Shop";
import Product from "./views/Product";
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

function App() {
  return (
    <div >
    
            <WrappedNavbar/>

      {/* <RouterProvider router={router} /> */}
      {/* version 5 */}
      <Routes>
        <Route path="/" element={
          <>
          <Mainhead/>
          <Course />
          {/* <Dashboard/> */}
          <Footerr/>
          {/* <Course name='html'/>
          <Course name='js'/>
          <Course name='js'/>
          <Course name='js'/>
          <Course name='js'/> */}

          {/* <CourseItem/> */}
          </>
        }
          
          ></Route>
        <Route path="Sign" element={<Sign/>}></Route>
        <Route path="homeWhenLogged" element={
          <>
          <HomeWhenLoggedIn/>
          <Course />
          {/* <Dashboard/> */}
          <Footerr/>
          </>
      }></Route>

        <Route path="SignUp" element={<SignUp/>}></Route>
        <Route path="login" element={<LogIn/>}></Route>
        <Route path="studentSignUp" element={<SignUpStu/>}></Route>
        <Route path="teacherSignUp" element={<SignUpTeach/>}></Route>

        
        <Route path="product" element={<Product/>}></Route>
        <Route path="contactUs" element={<ContactUs/>}></Route>


      </Routes>

    </div>
  );
}

export default App;
