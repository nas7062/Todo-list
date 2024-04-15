import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name:"theme",
    initialState :{
        isDarkMode :false,
        theme :null,
        themeMode:"light",
    },
    reducers :{
        toggleTheme :(state,action) =>{
            state.isDarkMode = !state.isDarkMode;
            state.themeMode = state.themeMode ==="light" ? "dark" :"light";
        }
        
    }
});

export const 
{
    toggleTheme
} = themeSlice.actions;

export default themeSlice;