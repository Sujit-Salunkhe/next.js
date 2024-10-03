import { createSlice, nanoid } from "@reduxjs/toolkit";


 const initialState = {
    task:[{id:1,text:"fist task"}]
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action) => {
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.task.push(todo)
        },
        removeTodo:(state,action) => {
                state.task = state.task.filter(todo => todo.id !== action.payload)
        }, 

    }

})

export const {addTodo,removeTodo} = todoSlice.actions
export default todoSlice.reducer