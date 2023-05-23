import { createSlice } from "@reduxjs/toolkit";

 export const cartSlice = createSlice({
    initialState:[],
    name:"cartSlice",
    reducers:{
        addTocart:(state,action)=>{
            const findProduct=state.find((p)=>p.id===action.payload.id);
            if(findProduct){
                findProduct.qnt+=1
            }
            else{
                const productClone={...action.payload,qnt:1}
                
                state.push(productClone);}
            
            
            
            
             },
        deleteFromcart:(state,action)=>{
            return state.filter((p)=>p.id!=action.payload.id)
        },
        clear:(state,action)=>{return[]},
}

})
export const {addTocart,deleteFromcart,clear}=cartSlice.actions;
export default cartSlice.reducer;
