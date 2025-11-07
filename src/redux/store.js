import {configureStore} from '@reduxjs/toolkit'
import { AuthReducer, CakeListReducer, CartReducer } from './reducer'
import CartsliceReducer from './cartSlice'
import { Middleware } from './middleware'

let store = configureStore({
    reducer:{
        Auth:AuthReducer,
        Cart:CartReducer,
        CakeList: CakeListReducer,
        CartSlice: CartsliceReducer
        
    },
    //middleware: ()=>[Middleware]
})
 
export default store