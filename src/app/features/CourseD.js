import { createSlice } from "@reduxjs/toolkit"
import { json } from "react-router";
const initialState={
    products:JSON.parse(localStorage.getItem('cart'))??[]
}
export const cartSlice = createSlice({
name:'cart',
initialState,
reducers:{
    // addToCart:(state,action)=>{
    //     const item=action.payload;
    //        state.products.push(item) 
    // },
    addCourse:(state,action)=>{
        const item=action.payload;
        // const ItemExist=state.products.find(course=>course.id===item.id)
        // if(ItemExist){
        //     ItemExist.quantity=(ItemExist.quantity || 0)+1
        // }
        // else{
        //     state.products.push({...item,quantity:item.quantity || 1}) 

        // }
        state.products.push(item);
        //use addcourse api of student 
        //اذا ما زبط استخدم لوكال ستوريج زي الفيديو 
        localStorage.setItem('cart',JSON.stringify(state.products))


    },
    deleteFromCart:(state,action)=>{
        const itemId=action.payload;
        state.products=state.products.filter(item=>item.iD !== itemId)
        localStorage.setItem('cart',JSON.stringify(state.products))

    }
   
}
})
export const { addToCart,addCourse,deleteFromCart } = cartSlice.actions
export default cartSlice.reducer

