import { configureStore } from "@reduxjs/toolkit";
import IncSlice from "./IncSlice";




const storeCounter=configureStore({
    reducer:{
        count:IncSlice
    }
})
export default storeCounter