import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";


export const createUsers = createAsyncThunk(
"createUsers",async(data,{rejectWithValue})=>{
    console.log("data",data);
    try{
        const response = await fetch("https://6888823aadf0e59551ba3c60.mockapi.io/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error("Network response was not ok"); 
        }
       
            const result = await response.json();
            return result;
    }
    catch(error) {
        return rejectWithValue(error.message);
    }}

);

export const fetchUsers = createAsyncThunk(
    "fetchUsers",async(_, { rejectWithValue }) => {
        try {
            const response = await fetch("https://6888823aadf0e59551ba3c60.mockapi.io/users");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const result = await response.json();
            return result;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const showUsers = createAsyncThunk(
    "showUsers",
    async (args, { rejectWithValue }) => {
      const response = await fetch("https://6888823aadf0e59551ba3c60.mockapi.io/users");
      try {
        const result = await response.json();
        return result;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );


const initialState = {
    user:[],
    loading: false,
    error:null,
}

export const authSlice = createSlice({
    name:"auth",
    initialState,

    reducers:{
        setUsers:(state,action)=>{
            state.user = action.payload;
        }
    },
    extraReducers:(builder)=>{
       builder
          .addCase(createUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(createUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
          })
          .addCase(createUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          .addCase(showUsers.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(showUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload; // whatever is in payload it will be entered to global state
          })
          .addCase(showUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload?.message || action.error?.message || 'Something went wrong';          });
         
        
        },

    });

export const{setUsers} = authSlice.actions;
export default authSlice.reducer;