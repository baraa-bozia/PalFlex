import {createBrowserRouter} from 'react-router-dom';
import Home from '../views/Home';
import ContactUs from '../views/ContactUs';
import SignUp from '../views/SignUp'
import Sign from '../views/Sign';
import Cart from '../views/Cart';
import Navbar from '../components/organism/Navbar';
export const router=createBrowserRouter([

    {
        path:"/",
        children:[
            {
                index: true,
                element: <Home/>
            },
            {
                path: "/SignUp",
                element: <SignUp/>
            },
            {
                path: "/Sign",
                element: <Sign/>
            },
            
            {
                path: "/contactUs",
                element: <ContactUs/>
            },
            {
                path: "/cart",
                element: <Cart/>
            }

        ]
    },
    
        
    
])