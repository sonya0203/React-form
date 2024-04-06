import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSlice";



const storeReduxToolkit=configureStore({
    reducer:{
        users:userSlice
    }
})
export default storeReduxToolkit