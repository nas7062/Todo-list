import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns"
import { initialTodos} from "../data/initialState";

const todoSlice = createSlice({
    name:'todos',
    initialState :{
        todos:initialTodos,
        selected :'',
        isHide:false,
        newDate:null,
    },
    reducers :{
        setDates:(state,action) =>{
            state.newDate =action.payload ?
            format(new Date(action.payload),'yyyy-MM-dd')
            :'yyyy-MM--dd';
        },
        addTodo:(state,action) =>{
            const newTodo = {
                ...action.payload,
                id:state.todos.length +1,
                isDone:false,
            };
            state.todos.push(newTodo);
        },
        updateTodo:(state,action) =>{
            const UpdateIndex = state.todos.findIndex(
                (item) =>item.id ===action.payload.id);
            if(UpdateIndex >=0)
            {
                state.todos.splice(UpdateIndex,1,action.payload);
            }
        },
        deleteTodo:(state,action) =>{
            const id = action.payload;
            state.todos = state.todos.filter((todo)=>todo.id !==id);
        },
        
        isHideTodo :(state,action) =>{
            state.isHide =false;
        },
        doneFilterTodo:(state,action)=>{
            state.isHide =!state.isHide;
            if(state.isHide)
            {
                state.todos = state.todos.filter((el)=>el.isDone===false);
            }
            else
            {
                state.todos = state.selected ? initialTodos.
                filter((el)=>el.tag ===state.selected)
                :initialTodos;
            }
        },
        resetTodo:(state,action)=>{
            state.selected ="";
        },
    },
});
export const{
    setDates,
    addTodo,
  updateTodo,
  deleteTodo,
  isHideTodo,
  doneFilterTodo,
  resetTodo
} = todoSlice.actions;

export default todoSlice.reducer;