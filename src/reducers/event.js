import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    isOpen :false,
    target :null,
    type :"create",
    CalendarOpen :false,
};

const eventSilce =createSlice({
    name :"event",
    initialState,
    reducers:{
        openModal :(state,action)=>{
            state.isOpen = !state.isOpen;
            state.target = action.payload ? action.payload :null;
        },
        modalType:(state,action)=>{
            state.type = action.payload ? action.payload :"create";
        },
        openCalendar: (state,action) =>{
            state.CalendarOpen = !state.CalendarOpen;
        },
    },
});

export const 
{
    openModal,
    modalType,
    openCalendar,
    hideDone,
} = eventSilce.actions;

export default eventSilce;