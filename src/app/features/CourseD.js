import { createSlice } from "@reduxjs/toolkit"
const initialState={
    products:[]
}
export const cartSlice = createSlice({
name:'cart',
initialState,
reducers:{
    addToCart:(state,action)=>{
        const item=action.payload;
           state.products.push(item) 
    }
    // display:(state,action)=>{
    //     const item=action.payload;
    //    state.courses.push(item) 
    //     console.log(state.courses.map((course)=>{

    //     }));

    // }
}
})
export const { addToCart } = cartSlice.actions
export default cartSlice.reducer

