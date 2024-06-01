import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
      todos: [{id:1, text:"Welcome to the TODO Application"}]
} 

// function sayHello(){
//   console.log("Hello World");
// }

 const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers:{
    // addTodo: sayHello or 
    addTodo: (state,action ) => {
      const todo = {
        id: nanoid(),
        text: action.payload
      } 
      state.todos.push(todo)
    },
    removeTodo: (state,action) => {
      state.todos =state.todos.filter((todo) => todo.id !== action.payload)
    },
  }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer