import { createSlice } from "@reduxjs/toolkit"
 
var initialState = {
    cartitems: []
}
 
var cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addtocart :(state,action)=>{
            console.log("payload received from dispatch" , action)
            state.cartitems = [...state.cartitems,action.payload]
        },
        getCartItems :(state,action)=>{
            console.log("payload received from dispatch" , action)
            state.cartitems = action.payload
        },
        removefromcart : (state,action) =>{
            console.log("payload received from dispatch" , action);
            state.cartitems=state.cartitems.filter((i)=>i.cakeid!==action.payload)
            console.log(state.cartitems,">>")
        }
    }
})
 
export let {addtocart , getCartItems,removefromcart} = cartSlice.actions
 
export default cartSlice.reducer
 