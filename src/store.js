import { configureStore } from "@reduxjs/toolkit";
import resturantSlice from "./redux/resturantSlice";

const store = configureStore({
   reducer:{
       resturantSlice
    }
})

export default store;