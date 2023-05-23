import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetcheProducts= createAsyncThunk("productsSlice/fetcheProducts",async() => {
   const res=await fetch("http://localhost:9000/product");
   const data= await res.json();
   return data;
})
const  productsSlice= createSlice({
    initialState:[],
    name:"productsSlice",
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetcheProducts.fulfilled,(state,action)=>{
            return action.payload;
        })
    }
})
export const{}=productsSlice.actions;
export default productsSlice.reducer;












