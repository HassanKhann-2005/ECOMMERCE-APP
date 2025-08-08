import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const PostProducts = createAsyncThunk(
    "PostProducts",async(productData,{rejectwithValue})=>{
        try{
            const response = await fetch("https://68949afabe3700414e13d6ed.mockapi.io/Products",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(productData)
            });
            if(!response.ok){
                throw new Error("Network response was not ok"); 
            }
           
                const result = await response.json();
                return result;
        }
        catch(error){
            return rejectwithValue(error.message);
        }

    }
)

export const fetchProducts = createAsyncThunk(
    "fetchProducts",async(_,{rejectwithValue})=>{
        try{
            const response = await fetch("https://68949afabe3700414e13d6ed.mockapi.io/Products");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectwithValue(error.message);
        }
    }
)

const initialState = {
    items:[],
    loading: false,
    error:null,
}

export const productSlice = createSlice({
   name:"productSlice",
    initialState,

    extraReducers:(builder)=>{
        builder

      // POST product
      .addCase(PostProducts.pending, (state) => {
        state.loading = true
      })
      .addCase(PostProducts.fulfilled, (state, action) => {
        state.loading = false
        state.items.push(action.payload)
      })
      .addCase(PostProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
      // GET products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })
    }
})

export default productSlice.reducer;