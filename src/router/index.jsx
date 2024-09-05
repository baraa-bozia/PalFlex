import {createBrowserRouter} from 'react-router-dom';
import Home from '../views/Home';
import Shop from '../views/Shop';
import Product from '../views/Product';
import ContactUs from '../views/ContactUs';
import SignUp from '../views/SignUp'
import Sign from '../views/Sign';
export const router=createBrowserRouter([

    
        {
            path: "/",
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
            path: "/product",
            element: <Product/>
        },
        {
            path: "/contactUs",
            element: <ContactUs/>
        }
    
])