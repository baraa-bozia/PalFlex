import React from 'react'
import withwrapper from "../components/HOC/withwrapper";
import { useDispatch, useSelector } from "react-redux";
import img7 from '../../src/images/image7.jpeg'
import { TrashIcon } from '@heroicons/react/24/solid';
import { deleteFromCart } from '../app/features/CourseD';
import toast from 'react-hot-toast';


 function Cart() {
  const cart=useSelector((state)=>state.course.products)
  console.log(cart);
  const dispatch=useDispatch();
const handleDeleteItem=(id)=>{
dispatch(deleteFromCart(id))
toast.success('Course Deleted Successfully')
}
  return (
    <div>


<div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-20 ml-40">
    <table className="w-full text-sm text-left rtl:text-right text-gray-900 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className='text-sm'>
                <th scope="col" class="px-2 py-3">
                    Course name
                      {/* {X()} */}
                    {/* {cart[0].title} */}
                </th>
                <th scope="col" class="px-6 py-3">
                Image
                </th>
                <th scope="col" class="px-2 py-3">
                    
                    Teacher name
                </th>
                <th scope="col" class="px-2 py-3">
                    Description
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-2 py-3">
                    Price
                </th>
                
                <th scope="col" class="px-2 py-3">
                    <span class="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody className='text-lg'>
          {/* {cart[0].iD} */}
           
            {cart.length>0?
            cart.map(item=>{
              // alert(item.title);
              // console.log(item);
              return(
<tr key={item.iD} class=" dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th >
                  {item.title}
                </th>
                <td class="px-2 py-4 w-72">
                    <img src={img7}></img>
                </td>
                <td class="px-2 py-4">
                    {item.name}
                </td>
                <td class="px-2 py-4">
                    {item.description}
                </td>
                <td class="px-2 py-4">
                    {item.status}
                </td>
                <td class="px-2 py-4">
                    {item.price}
                </td>
                <td class="px-2 py-4">
                    <button onClick={()=>handleDeleteItem(item.iD)}><TrashIcon width={25} className='text-orange-400'/></button>
                </td>
                
            </tr>)
            })
            :
            <tr className=" dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="px-2 py-4 text-center" colSpan={6}>No Courses Yet!</td>

            </tr>
           }
          
        </tbody>
    </table>
</div>
    </div>
  )
}
const wrappedCart=withwrapper(Cart);
export default wrappedCart;